import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    title : {
        fontSize : 80,
        color : 'white',
        alignItems : 'center',
        fontFamily : 'serif',
        paddingBottom : 50
    },

    container : {
        backgroundColor : '#2c2e33',
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },

    spacing : {
        height : 30,
    },

    textFieldContainer : {
        width : 300,
    },

    textFieldHeader : {
        fontSize : 20,
        color : 'white',
    },

    //index screen styling
    welcomeTitle : {
        fontSize : 80,
        color : 'white',
        alignItems : 'center',
        fontFamily : 'serif',
        paddingBottom : 50
    },
    welcomeButtonContainer : {
        width : 250,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row',
    },
    welcomeButtons : {
        backgroundColor : 'white',
        alignItems : 'center',
        justifyContent : 'center',
        height : 50,
        width : 100,
        margin : 20,
        borderRadius : 20,
        borderColor : 'black',
        borderWidth : 2
    },

    //login styling
    loginTitle : {
        fontSize : 80,
        color : 'white',
        alignItems : 'center',
        fontFamily : 'serif'
    },
    textField : {
        backgroundColor : '#ffffff',
        width : 300,
        height : 50,
        borderRadius : 10,
        borderWidth : .8,
        borderColor : 'white',
        color : 'black',
        fontSize : 15,
    },
    loginButton : {
        borderRadius : 100,
        width : 100,
    },

    registerTitle : {
        fontSize : 80,
        color : 'white',
        alignItems : 'center'
    },

    registerButton : {
        borderRadius : 100,
        width : 300,
    },

    dynamicHomeDashboard : {
        backgroundColor : '#5a82e7',
        width : '90%',
        height : '25%',
        borderRadius : 20,
        paddingTop : 20,
        justifyContent : 'center',
        alignItems : 'center'
    },

    practiceButton : {
        backgroundColor : '#727888',
        width : '90%',
        height : '10%',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 20,
        marginTop : 10,
        padding : 5,
    },

    //practice session style
    practiceSessionTitle : {
        fontSize : 30,
        color : 'white',
        padding : 30
    },
    timerContainter : {
        borderColor : "grey",
        borderWidth : 2,
        width : 300,
        height : 200,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column'
    },
    time : {
        fontSize : 60,
        color : 'white'
    },
    timeButtonContainer : {
        width : 300,
        height : 100,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center'
    },
    timeButtons : {
        margin : 10,
        width : 100,
        height : 50,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 50,
    },
    submitButton : {
        backgroundColor : 'white',
        justifyContent : 'center',
        position : 'absolute',
        bottom : 50,
        right : 50,
        width : 100,
        height : 40,
        alignItems : 'center',
        borderRadius : 30
    },
    topBar : {
        backgroundColor : 'white',
        justifyContent : 'center',
        position : 'absolute',
        top : 50,
        left : 50,
        width : 50,
        height : 40,
        alignItems : 'center',
        borderRadius : 30
    },

    //overview styles
    overviewTitle : {
        fontSize : 50,
        position : 'absolute',
        top : 50
    },
    overviewTextFields : {
        backgroundColor : 'white',
        width : '80%',
        height : '5%',
        margin : 20,
        borderRadius : 10,
        
    }
});