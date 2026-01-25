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
    //practice session style ----------------
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
        bottom : 25,
        right : 20,
        width : 100,
        height : 40,
        alignItems : 'center',
        borderRadius : 30
    },
    backButton : {
        justifyContent : 'center',
        position : 'absolute',
        top : 30,
        left : 25,
        width : 50,
        height : 40,
        alignItems : 'center',
        borderRadius : 30
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
    duration : {
        color : 'white',
        fontSize : 20,
        position : 'absolute',
        top : 150
    }, 
    pieceListContainer : {
        backgroundColor : 'red',
        width : '90%',
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