
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { barve } from '../theme';

export default function ZacetniZaslon() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.naslov}>Šolske obveznosti</Text>

      <Text style={styles.opis}>
        Dobrodošel v aplikaciji za spremljanje šolskih nalog!
      </Text>

      <Pressable
        style={styles.gumb}
        onPress={() => router.push('/moje-naloge')}
      >
        <Text style={styles.besediloGumba}>Moje naloge</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: barve.ozadje,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  naslov: {
    fontSize: 28,
    fontWeight: 'bold',
    color: barve.glavna,
    marginBottom: 15,
  },
  opis: {
    fontSize: 16,
    color: barve.besedilo,
    textAlign: 'center',
    marginBottom: 30,
  },
  gumb: {
    backgroundColor: barve.glavna,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  besediloGumba: {
    color: barve.bela,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

