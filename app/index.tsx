import { View, Text } from "react-native";
import { Link } from "expo-router"

export default function Home(){
    return(
        <View style={{flex: 1, padding: 20, alignItems: "center", justifyContent: "center"}}>
            <Text style={{fontSize: 30}}>Tela home</Text>
            <Link href={"/login"}> Ir para pagina de login</Link>
        </View>
    )
}