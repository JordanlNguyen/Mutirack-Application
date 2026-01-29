import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    //global style
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
    textFieldContainer : {
        width : 300,
    },
    header : {
        fontSize : 30,
        color : 'white',
        padding : 30,
        position : 'absolute',
        top : 0,
        fontFamily : 'serif'
    },
    navigationBar : {
        backgroundColor : '#23252A',
        width : '90%',
        height : '10%',
        position : 'absolute',
        bottom : 2,
        borderRadius : 28,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row',
        gap : '7%'
    },
    navigationBarItem : {
        //8B9099 inactive icons
        backgroundColor : '#E6E8EB',
        width : 65,
        height : 70,
        jusitfyContent : 'center',
        alignItems : 'center',
        borderRadius : 26
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
    //practice session style ----------------
    timerContainter : {
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column',
        margin : 20
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
        width : 80,
        height : 35,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 20,
    }, 
    timeButtonText : {
        fontSize : 20,
        fontFamily : 'serif'
    },
    submitButton : {
        backgroundColor : 'white',
        justifyContent : 'center',
        position : 'absolute',
        alignItems : 'center',
        bottom : 180,
        width : 80,
        height : 35,
        borderRadius : 30
    },
    submitErrorMessageContainer : {
        backgroundColor : 'grey',
        width : 190,
        height : 50,
        justifyContent : 'center',
        textAlign : 'center',
        borderRadius : 4,
        position : 'absolute',
        bottom : 120,
    },
    pieceSelectionContainer : {
        backgroundColor : '#484b53',
        width : '70%',
        maxHeight : '15%',
        borderRadius : 10
    },
    //overview styles ------------------------
    overviewTitle : {
        fontSize : 30,
        color : 'white',
        padding : 30,
        position : 'absolute',
        top : 0,
        fontFamily : 'serif'
    },
    overviewTextFields : {
        backgroundColor : 'white',
        width : '80%',
        height : '5%',
        margin : 20,
        borderRadius : 10,
        
    },
    pieceContainer : {
        backgroundColor : 'blue',
        flexDirection : 'row',
        width : '90%',
        gap : 20
    },
    notSelectedContainer : {
        backgroundColor : 'red',
        width : '45%',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 20
    },
    itemText : {
        fontSize : 22
    },
    OverviewNotes : {
        backgroundColor : '#535760',
        width : '90%',
        height : '50%',
        margin : 10,
        borderRadius : 20,
        verticalAlign : 'top',
        fontSize : 20
    },
    overViewSubText : {
        fontSize : 20,
        color : 'white',
        fontFamily : 'serif',
        padding : 10
    },
    overViewSubmit : {
        backgroundColor : 'white',
        position : 'absolute',
        bottom : 20,
        right : 20,
        width : 60,
        height : 40,
        alignItems : 'center',
        justifyContent : 'center'
    },

    //home screen css
    statusContainer : {
        justifyContent : 'center',
        alignItems : 'center',
        margin : 20
    },
        practiceButton : {
        backgroundColor : '#727888',
        width : '90%',
        height : '10%',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 20,
        marginTop : 20,
        padding : 10,
    },
    practiceButtonText : {
        fontSize : 30,
        fontFamily : 'serif',
    }

});