
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import KarticaNaloge from '../components/kartica-naloge';
import { barve } from '../theme';

export default function MojeNaloge() {
  const [naloge, setNaloge] = useState([
    { id: 1, naslov: 'Nauči se za test', predmet: 'Matematika' },
    { id: 2, naslov: 'Dokončaj projekt', predmet: 'Računalniški produkti in storitve' },
  ]);

  function dodajNalogo() {
    const novaNaloga = {
      id: Date.now(),
      naslov: 'Nova šolska naloga',
      predmet: 'Splošno',
    };

    setNaloge([...naloge, novaNaloga]);
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.vsebina}
    >
      <Text style={styles.naslov}>Moje naloge</Text>

      <Text style={styles.stevilo}>
        Število nalog: {naloge.length}
      </Text>

      {naloge.map((naloga) => (
        <KarticaNaloge
          key={naloga.id}
          naslov={naloga.naslov}
          predmet={naloga.predmet}
        />
      ))}

      <Pressable style={styles.gumb} onPress={dodajNalogo}>
        <Text style={styles.besediloGumba}>+ Dodaj nalogo</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: barve.ozadje,
  },
  vsebina: {
    padding: 20,
    paddingTop: 40,
  },
  naslov: {
    fontSize: 28,
    fontWeight: 'bold',
    color: barve.glavna,
    marginBottom: 15,
  },
  stevilo: {
    fontSize: 16,
    color: barve.siva,
    marginBottom: 20,
  },
  gumb: {
    backgroundColor: barve.glavna,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  besediloGumba: {
    color: barve.bela,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
