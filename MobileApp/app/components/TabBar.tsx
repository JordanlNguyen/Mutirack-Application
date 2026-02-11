import { View, Platform, StyleSheet } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs'
import React from 'react';
import { Feather } from '@expo/vector-icons';

export function TabBar({ state, descriptors, navigation } : BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  const icon = {
    index : (props : any) => <Feather name="home" size={24} color={'white'}/>,
    practice : (props : any) => <Feather name="play" size={24} color={'white'}/>,
    profile : (props : any) => <Feather name="user" size={24} color={'white'}/>,
    sessions : (props : any) => <Feather name="bookmark" size={24} color={'white'}/>

};

  return (
    <View style={style.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={style.tabBarItem}
          >
            {icon[route.name]({
                color: isFocused ? "red" : "blue"
            })}
            <Text style={{ color: isFocused ? 'white' : colors.text }}>
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const style = StyleSheet.create({
    tabBar : {
        position : 'absolute',
        bottom : 30,
        flexDirection : 'row',
        justifyContent : 'space-between',
        backgroundColor : '#50535b',
        alignItems : 'center',
        marginHorizontal : 50,
        padding : 5,
        borderRadius : 35,
        shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 10
        },
        shadowOpacity : 0.25,
        shadowRadius : 3.5,
        elevation : 5
    },
    tabBarItem : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        gap : 5
    }
})