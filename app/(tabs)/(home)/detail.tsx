import { Stack, router } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Detail() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Detail',
          headerStyle: styles.header,
          headerTitle: 'Detail',
          headerLeft: () => <Button title="Back" onPress={() => router.back()} />,
        }}
      />
      <Text>Detail</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'pink',
  },
})
