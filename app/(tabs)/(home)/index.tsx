import { Stack, router } from 'expo-router'
import { Button, StyleSheet, View } from 'react-native'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Home', headerStyle: styles.header, headerTitle: 'Home' }} />
      <Button title="Detail" onPress={() => router.push('/detail')} />
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
