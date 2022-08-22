import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = ({route}) => {
  const {recipe} = route.params;
  return (
    <ScrollView>
      <View style={styles.Details}>

        <View style={styles.item}>
          <Text style={{ fontSize: 22, color: "#008080", fontWeight: '800' }}>
            Ingredients:
          </Text>
          <Text style={styles.Ingredients}>{`${recipe.ingredients.map((item) => item['food'])}`}</Text>
        </View>

        <View style={styles.item}>
          <Text style={{ fontSize: 22, color: "#008080", fontWeight: '800' }}>
            Food Category:
          </Text>
          <Text style={styles.Ingredients}>{`${recipe.ingredients.map((item) => item['foodCategory'])}`}</Text>
        </View>

        <View style={styles.item}>
          <Text style={{ fontSize: 22, color: "#008080", fontWeight: '800' }}>
            Calories:
          </Text>
          <Text style={styles.Ingredients}>{`${recipe.calories}`}</Text>
        </View>

        <View style={styles.item}>
          <Text style={{ fontSize: 22, color: "#008080", fontWeight: '800' }}>
            Label:
          </Text>
          <Text style={styles.Ingredients}>{`${recipe.label}`}</Text>
        </View>

        <View style={styles.item}>
          <Text style={{ fontSize: 22, color: "#008080", fontWeight: '800' }}>
            Meal Type:
          </Text>
          <Text style={styles.Ingredients}>{`${recipe.mealType}`}</Text>
        </View>

        <View style={styles.item}>
          <Text style={{ fontSize: 22, color: "#008080", fontWeight: '800' }}>
            Description:
          </Text>
          <Text style={styles.Ingredients}>{`${recipe.ingredientsLines}`}</Text>
        </View>

        <View style={styles.item}>
          <Text style={{ fontSize: 22, color: "#008080", fontWeight: '800' }}>
            Diet Label:
          </Text>
          <Text style={styles.Ingredients}>{`${recipe.dietLabels}`}</Text>
        </View>

        <View style={styles.item}>
          <Text style={{ fontSize: 22, color: "#008080", fontWeight: '800' }}>
            Cuisine Type:
          </Text>
          <Text style={styles.Ingredients}>{`${recipe.cuisineType}`}</Text>
        </View>


      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Details: {
    marginBottom: 30,
    padding: 5
  },
  item: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    margin: 10,
    padding:10,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  Ingredients:{
    fontSize:20,
    color:'#008080',
    marginLeft:10
  }
})
export default Details
