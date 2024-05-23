import { useState } from "react";
import { View, Text, Pressable, TextInput, StyleSheet, Alert, Image } from "react-native";

export default function Login(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    function validarLogin(email: string, senha: string)
    {
        if(email == null || email == "")
        {
            
            Alert.alert(
                "Ops...",
                "O email não pode ser vazio ... :(",
                [{
                    text: 'Ok'
                }]
            )
        }
        if( senha == null || senha == "" || senha.length < 10)
        {
            Alert.alert(
                "Ops...",
                "Senha invalida",
                [{
                    text: 'Ok'
                }]
            )
        }
    }

    return(
        <View style={estilo.tela}>
            <View style={estilo.container}>
        <Image
        style={estilo.logo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png',
        }}
      />
                <TextInput 
                    style={estilo.text_input} 
                    placeholder="Email..."
                    onChangeText={text => setEmail(text)}
                /> 

                <TextInput 
                    secureTextEntry={true} 
                    style={estilo.text_input} maxLength={10}
                    placeholder="Senha..."
                    onChangeText={text => setSenha(text)}
                />
                <Pressable 
                    style={estilo.botao_entrar}
                    onPress={()=> validarLogin(email, senha)}
                >
                    <Text>Entrar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    tela: {
        flex: 1, 
        padding: 10, 
        alignItems: "center", 
        justifyContent: "center"
    },
    container: {
        gap: 15,
        borderRadius: 20,
        padding: 30,
        backgroundColor: '#DE3C4B',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.60,
        shadowRadius: 6.68,
        elevation: 11,
    },
    text_input: {
        height: 70,
        width: 280,
        backgroundColor: '#FFF',
        fontSize: 18,
        //fontWeight: 'bold',
        padding: 10,
        borderRadius: 20,
    },
    botao_entrar: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#fff'
    },
    logo: {
        marginLeft: 8,
        height: 70,
        width:270,
    }

})