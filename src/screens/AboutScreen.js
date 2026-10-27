import { Animated, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Footer from "../components/Footer";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import WileDevIllustration from "../components/WileDevIllustration";
import useFadeIn from "../hooks/useFadeIn";
import { useTheme } from "../theme/ThemeContext";

const PARAGRAFOS = [
  "A WILE.DEV ajuda pequenos negócios e designers a transformarem boas ideias em experiências digitais. Criamos sites dinâmicos e funcionais, pensados para apresentar cada projeto com clareza e propósito.",
  "Usamos tecnologias como React, HTML e CSS para desenvolver interfaces que unem visual agradável e praticidade. Nosso objetivo é entender o que cada projeto precisa e encontrar a melhor forma de levá-lo para a web.",
  "Acreditamos que toda boa ideia merece a oportunidade de ganhar vida no digital. Se você representa um pequeno negócio ou é designer e quer criar um site para o seu projeto, vamos conversar.",
];

export default function AboutScreen({ navigation }) {
  const { colors } = useTheme();
  const fadeIn = useFadeIn();

  return (
    <SafeAreaView
      edges={["top"]}
      style={[styles.safe, { backgroundColor: colors.background }]}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <WileDevIllustration />

        <Animated.View style={fadeIn}>
          <Text style={[styles.title, { color: colors.text }]}>
            Sobre a WILE.DEV
          </Text>

          {PARAGRAFOS.map((texto, i) => (
            <Text
              key={i}
              style={[styles.paragraph, { color: colors.textSoft }]}
            >
              {texto}
            </Text>
          ))}

          <View style={styles.back}>
            <PrimaryButton title="Voltar" onPress={() => navigation.goBack()} />
          </View>
        </Animated.View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 28,
    width: "100%",
    maxWidth: 520,
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    marginTop: 24,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 24,
    marginTop: 18,
  },
  back: { marginTop: 28 },
});
