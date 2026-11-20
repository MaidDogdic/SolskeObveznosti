
import { StyleSheet, Text, View } from 'react-native';
import { barve } from '../theme';

type Props = {
  naslov: string;
  predmet: string;
};

export default function KarticaNaloge({ naslov, predmet }: Props) {
  return (
    <View style={styles.kartica}>
      <Text style={styles.naslov}>{naslov}</Text>
      <Text style={styles.predmet}>{predmet}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  kartica: {
    backgroundColor: barve.bela,
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    width: '100%',
  },
  naslov: {
    fontSize: 18,
    fontWeight: 'bold',
    color: barve.besedilo,
  },
  predmet: {
    fontSize: 14,
    color: barve.siva,
    marginTop: 5,
  },
});
