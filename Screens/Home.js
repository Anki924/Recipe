import { ActivityIndicator, FlatList, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const Home = ({navigation}) => {
    const [Recipes, setRecipes] = useState();
    const [searchQuery, setSearchQuery] = useState('');
    // const [number, setNumber] = useState('1');
    const [Loading, setLoading] = useState(false);

    const ApiId = "199ba76c";
    const ApiKey = 'a0bbaa270106322ccb6466a854336882';
    const ApiURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=${ApiId}&app_key=${ApiKey}&calories=591-722`;
    // https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=${ApiId}&app_key=${ApiKey}&calories=591-722

    async function apiCall() {
        setLoading(true);
        let resp = await fetch(ApiURL);
        let respJson = await resp.json();
        setRecipes(respJson.hits)
        setLoading(false);
        Keyboard.dismiss();
        setSearchQuery('')
    }


    useEffect(() => {
        setLoading(true);
        apiCall();

    }, [])

    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 21, fontWeight: '800', color: "black", width: '100%',marginBottom:15 }}>
                What Recipe Would You Like To Search?
            </Text>

            <View style={{ display: 'flex', flexDirection: 'row' ,alignItems:'center',}}>
                <TextInput placeholder='Search Recipe...'
                    style={styles.inputField}
                    onChangeText={text => setSearchQuery(text)}
                />

                {/* <TextInput
                    onChangeText={text => setNumber(text)}
                    style={[styles.inputField, { width: '20%', fontSize: 18, marginLeft: 15, color: '#008080', fontWeight: 'bold' }]}
                    value={number}
                    keyboardType='number-pad'
                /> */}
            </View>

            <TouchableOpacity style={styles.button}
                onPress={apiCall}
                title='submit'>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>

        <SafeAreaView style={{flex:1}}>
        {Loading ? <ActivityIndicator size="large" /> :
            <FlatList
                style={styles.recipes}
                data={Recipes}
                renderItem={({ item }) => {
                    return (
                        
                        <View style={styles.recipe}>
                            <Image style={styles.Image}
                                source={{ uri: `${item.recipe.image}` }}
                            />
                            <View style={{ padding: 20, flexDirection: 'row' }}>

                                <Text style={styles.label}>
                                    {item.recipe.label}
                                </Text>
                                <TouchableOpacity
                                
                                onPress={() => {navigation.navigate("Details", {recipe:item.recipe})}}
                                >
                                    <Text style={{ marginLeft: 50, fontSize: 20, color: "white" , backgroundColor:"#1a68d6",padding:7,borderRadius:8,paddingHorizontal:10}}>
                                        Details
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
            />}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    inputField: {
        height: '120%',
        width: '90%',
        backgroundColor: "White",
        borderRadius: 20,
        marginLeft: 10,
        paddingLeft: 15,
        borderRightColor: '#f4511e',
        borderWidth: 2,
        padding: 5,
        fontSize:22

    },
    buttons: {
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#1a68d6',
        width: '90%',
        alignItems: 'center',
        margin: 15,
        height: 35,
        borderRadius: 15,
        justifyContent: 'center',
        marginTop: 25
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    Image: {
        width: '100%',
        height: 200,
        borderRadius: 20
    },
    label: {
        fontSize: 18,
        width: '60%',
        color: "black",
        fontWeight: '800',
    },
    recipe: {
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 20,
        backgroundColor: 'white',
        margin: 10,
        marginBottom: 40
    },
    
})
export default Home
