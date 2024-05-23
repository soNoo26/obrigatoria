import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { Link } from "expo-router";


export default function Home() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
        if (text.includes('@')) {
            setEmailError('');
        } else {
            setEmailError('Error message');
        }
    };

    return(
        <View style={estilo.tela}>
            <View style={estilo.container}>
            <Image style={estilo.logo}
                        source={{
                            uri: 'https://i0.wp.com/smilephoto.com.br/wp-content/uploads/2018/05/sesi-logo.png?ssl=1'
                        }}
                    />
                </View>
                <TextInput
                    placeholder="Email"
                    style={[estilo.inputemail, emailError ? estilo.Errorinp : null]}
                    keyboardType="email-address"
                    onChangeText={handleEmailChange}
                    value={email}
                />
                {emailError ? <Text style={estilo.errorText}>{emailError}</Text> : null}
                <View style={estilo.inputContainer}>
                <View style={estilo.inputContainer}>
                <TextInput
                placeholder="Senha"
                style={estilo.input} maxLength={10}
                secureTextEntry={!passwordVisible}
                />
                <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={estilo.eyeIcon}
                >
                    <Icon name = {passwordVisible ? "eye" : "eye-off"} size={24} color="gray" />
                </TouchableOpacity>
                </View>
                <Link href={"#"} style={estilo.btnnew}>Cadastrar</Link>
                <Link href={"#"} style={estilo.btnentrar}>Entrar</Link>
            </View>
        </View>
    );
}


const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    container: {
        alignItems: 'center',
        gap: 15,
        borderRadius: 20,
        padding: 15,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.60,
        shadowRadius: 6.68,
        elevation: 11,
    },


    input: {
        marginBottom: 15,
        padding: 1,
        fontSize: 20,
        width: 280,
    },

    Errorinp: {
        borderBottomColor: 'red',
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingRight: 5,
        width: 280,
    },

    inputemail: {
        marginTop: 20,
        borderBottomWidth: 1,    
        padding: 1,
        fontSize: 20,
        width: 280,
    },

    eyeIcon: {
        position: 'absolute',
        right: 10,
    },

    logo: {
        height: 80,
        width: 270
    },

    btnentrar: {
        textAlign: 'center',
        backgroundColor: 'red',
        borderRadius: 15,
        width: 250,
        fontSize: 23,
        color: 'white',
        padding: 5
    },

    btnnew: {
        fontSize: 23
    },

    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 15,
    }
})
