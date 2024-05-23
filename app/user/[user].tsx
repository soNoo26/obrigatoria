import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function User(){

    const {user} = useLocalSearchParams()

    return(
        <View style={{flex: 1, padding: 20, alignItems: "center", justifyContent: "center"}}>
            <Text style={{fontSize: 30}}>Bem vindo {user}</Text>
        </View>
    )
}