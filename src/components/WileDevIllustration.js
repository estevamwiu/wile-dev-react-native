import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';

export default function WileDevIllustration() {
  const { colors } = useTheme();

  return (
    <View
      accessible={false}
      style={[styles.wrapper, { backgroundColor: colors.background }]}
    >
      <View style={[styles.frame, { borderColor: colors.accent }]} />

      <View style={styles.browser}>
        <View style={styles.toolbar}>
          <View style={[styles.dot, { backgroundColor: '#FF6B6B' }]} />
          <View style={[styles.dot, { backgroundColor: '#FFD166' }]} />
          <View style={[styles.dot, { backgroundColor: colors.accent }]} />
          <View style={styles.addressBar}>
            <Text style={styles.addressText}>wile.dev</Text>
          </View>
        </View>

        <View style={styles.page}>
          <View style={styles.pageHeader}>
            <Text style={styles.brand}>WILE.DEV</Text>
            <Ionicons name="menu" size={20} color="#D6DEE8" />
          </View>

          <View style={styles.hero}>
            <View style={styles.copy}>
              <View style={styles.accentLine} />
              <Text style={styles.headline}>Ideias que ganham vida na web.</Text>
              <View style={styles.bodyLine} />
              <View style={[styles.bodyLine, styles.shortLine]} />
              <View style={styles.button}>
                <Text style={styles.buttonText}>Vamos conversar</Text>
              </View>
            </View>

            <View style={styles.preview}>
              <Ionicons name="code-slash" size={38} color={colors.accent} />
              <View style={styles.previewLine} />
              <View style={[styles.previewLine, styles.previewShortLine]} />
            </View>
          </View>

          <View style={styles.technologyTag}>
            <Text style={styles.tagText}>REACT  ·  HTML  ·  CSS</Text>
          </View>
        </View>
      </View>

      <View style={styles.codeBadge}>
        <Ionicons name="code-slash" size={24} color={colors.accent} />
      </View>

      <View style={styles.phone}>
        <View style={styles.phoneTop} />
        <Ionicons name="phone-portrait-outline" size={26} color={colors.accent} />
        <View style={styles.phoneLine} />
        <View style={[styles.phoneLine, styles.phoneShortLine]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    aspectRatio: 1.15,
    marginBottom: 8,
    borderRadius: 18,
    position: 'relative',
    justifyContent: 'center',
  },
  frame: {
    ...StyleSheet.absoluteFillObject,
    top: -6,
    left: 6,
    right: -6,
    bottom: 6,
    borderWidth: 2,
    borderRadius: 18,
  },
  browser: {
    position: 'absolute',
    top: '15%',
    left: '7%',
    right: '8%',
    bottom: '15%',
    overflow: 'hidden',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#29415C',
    backgroundColor: '#0C1830',
  },
  toolbar: {
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
    backgroundColor: '#142641',
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },
  addressBar: {
    flex: 1,
    marginLeft: 8,
    paddingVertical: 3,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#0C1830',
  },
  addressText: {
    color: '#A7B8CC',
    fontSize: 9,
  },
  page: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 8,
  },
  pageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  hero: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  copy: {
    flex: 1,
    alignItems: 'flex-start',
  },
  accentLine: {
    width: 24,
    height: 3,
    marginBottom: 6,
    borderRadius: 2,
    backgroundColor: '#22D3FF',
  },
  headline: {
    maxWidth: 150,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    lineHeight: 19,
  },
  bodyLine: {
    width: '92%',
    height: 3,
    marginTop: 6,
    borderRadius: 2,
    backgroundColor: '#52647A',
  },
  shortLine: {
    width: '65%',
    marginTop: 4,
  },
  button: {
    marginTop: 10,
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#22D3FF',
  },
  buttonText: {
    color: '#031325',
    fontSize: 8,
    fontWeight: '700',
  },
  preview: {
    width: '34%',
    aspectRatio: 0.88,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#172B47',
  },
  previewLine: {
    width: '60%',
    height: 3,
    marginTop: 9,
    borderRadius: 2,
    backgroundColor: '#52647A',
  },
  previewShortLine: {
    width: '42%',
    marginTop: 5,
  },
  technologyTag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    backgroundColor: '#172B47',
  },
  tagText: {
    color: '#A7B8CC',
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  codeBadge: {
    position: 'absolute',
    top: '8%',
    right: '7%',
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: '#142641',
    borderWidth: 1,
    borderColor: '#29415C',
  },
  phone: {
    position: 'absolute',
    right: '10%',
    bottom: '7%',
    width: 54,
    height: 98,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    borderWidth: 2,
    borderColor: '#22D3FF',
    borderRadius: 12,
    backgroundColor: '#0C1830',
  },
  phoneTop: {
    position: 'absolute',
    top: 5,
    width: 12,
    height: 2,
    borderRadius: 1,
    backgroundColor: '#52647A',
  },
  phoneLine: {
    width: '65%',
    height: 3,
    borderRadius: 2,
    backgroundColor: '#52647A',
  },
  phoneShortLine: {
    width: '45%',
  },
});
