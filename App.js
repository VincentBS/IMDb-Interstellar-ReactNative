import React from "react";
import {
  StyleSheet,
  Platform,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar style="light" backgroundColor="black" />
      <ScrollView>
        <View style={[styles.logoContainer]}>
          <Image
            source={require("./assets/imdb-logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={[styles.filmContainer]}>
          <View style={[styles.film]}>
            <Text style={[styles.filmTitle]}>Interstellar</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.filmDetails]}>2014</Text>
              <Text style={[styles.filmDetails]}>PG-13</Text>
              <Text style={[styles.filmDetails]}>2h 49min</Text>
              <Text style={[styles.filmDetails]}>Adventure,Drama,Sci-Fi</Text>
            </View>

            <View style={[styles.filmDescription]}>
              <Image
                source={require("./assets/img-film.jpg")}
                style={styles.filmImg}
                // resizeMode="contain"
              />
              <View style={[styles.filmDescriptionElements]}>
                <Text style={[styles.filmDescriptionText]}>
                  A team of explorers travel through a wormhole in space in an
                  attempt to ensure humanity's survival
                </Text>
                <TouchableOpacity style={[styles.filmDescriptionButton]}>
                  <Text style={[styles.filmDescriptionButtonText]}>
                    + ADD TO WATCHLIST
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.filmScore]}>
              <View style={[styles.scoreItem]}>
                <Ionicons name="star" size={30} color="#E6B91E" />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    marginTop: 3,
                  }}
                >
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
                  >
                    8.6
                  </Text>
                  <Text style={{ color: "white" }}>/10</Text>
                </View>
                <Text style={{ fontSize: 12, color: "#999999" }}>1.1M</Text>
              </View>
              <View style={[styles.scoreItem]}>
                <MaterialIcons name="star-outline" size={34} color="white" />
                <Text style={{ fontSize: 16, color: "white", marginTop: 3 }}>
                  RATE THIS
                </Text>
              </View>
              <View style={[styles.scoreItem]}>
                <View
                  style={{
                    width: 26,
                    height: 26,
                    backgroundColor: "#62C74F",
                    borderRadius: 2,
                    marginTop: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    74
                  </Text>
                </View>
                <Text style={{ color: "white", marginTop: 3 }}>Metascore</Text>
                <Text style={{ fontSize: 12, color: "#999999" }}>
                  46 critic reviews
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.filmContainer]}>
          <View style={[styles.film]}>
            <View style={[styles.titleCast]}>
              <Text style={[styles.titleCastText]}>Top Billed Cast</Text>
              <TouchableOpacity>
                <Text style={[styles.titleCastTextAside]}>SEE ALL</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false} // to hide the scroll bar
            >
              <View style={{ marginRight: 10 }}>
                <Image
                  source={require("./assets/matthew-mc-conaughey.jpg")}
                  style={styles.imgActor}
                />
                <View style={styles.descriptionCasting}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.actorName}
                  >
                    Matthew McConaughey
                  </Text>
                  <Text style={styles.roleName}>Cooper</Text>
                </View>
              </View>
              <View style={{ marginRight: 10 }}>
                <Image
                  source={require("./assets/anne-hathaway.jpg")}
                  style={styles.imgActor}
                ></Image>
                <View style={styles.descriptionCasting}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.actorName}
                  >
                    Anne Hathaway
                  </Text>
                  <Text style={styles.roleName}>Brand</Text>
                </View>
              </View>
              <View style={{ marginRight: 10 }}>
                <Image
                  source={require("./assets/michael-caine.jpg")}
                  style={styles.imgActor}
                ></Image>
                <View style={styles.descriptionCasting}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.actorName}
                  >
                    Michael Caine
                  </Text>
                  <Text style={styles.roleName}>Professeur Brand</Text>
                </View>
              </View>
              <View style={{ marginRight: 20 }}>
                <Image
                  source={require("./assets/john-lithgow.jpg")}
                  style={styles.imgActor}
                ></Image>
                <View style={styles.descriptionCasting}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.actorName}
                  >
                    John Lithgow
                  </Text>
                  <Text style={styles.roleName}>Donald</Text>
                </View>
              </View>
            </ScrollView>
            <View style={{ marginRight: 20 }}>
              <View style={{ marginTop: 20 }}>
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
                >
                  Director
                </Text>
                <Text style={{ color: "#999999", fontSize: 13 }}>
                  Christopher Nolan
                </Text>
              </View>
              <View style={{ marginTop: 15, marginBottom: 10 }}>
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
                >
                  Writters
                </Text>
                <Text style={{ color: "#999999", fontSize: 13 }}>
                  Jonathan Nolan (written by) and Christopher Nolan (written by)
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0, // don't forget to put a value for ios. If not ios generate an error!
  },
  logoContainer: {
    backgroundColor: "#393939",
    height: 70,
    justifyContent: "center",
  },
  logo: {
    height: 40,
    width: 81,
    marginLeft: 20,
  },
  filmContainer: {
    marginTop: 20,
    backgroundColor: "#212121",
  },
  film: {
    marginLeft: 20,
  },
  filmTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "100", //work only on ios
    marginBottom: 5,
  },
  filmDetails: {
    color: "#999999",
    fontSize: 14,
    marginBottom: 25,
    marginHorizontal: 5,
  },

  filmDescription: {
    height: 150,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 25,
  },

  filmImg: {
    height: 150,
    width: 100,
    marginRight: 20,
  },

  filmDescriptionElements: {
    marginRight: 20,
    // flex: 1,
    flexShrink: 1,
  },

  filmDescriptionText: {
    fontSize: 14,
    color: "white",
    marginBottom: 20,
  },

  filmDescriptionButton: {
    backgroundColor: "#0277BD",
    height: 30,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },

  filmDescriptionButtonText: {
    color: "white",
  },

  filmScore: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 90,
  },

  scoreItem: {
    alignItems: "center",
  },

  titleCast: {
    marginTop: 20,
    marginBottom: 15,
    flexDirection: "row",
    marginRight: 20,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  titleCastText: {
    fontSize: 21,
    fontWeight: "bold",
    color: "white",
  },

  titleCastTextAside: {
    color: "#0277BD",
    fontSize: 13,
    fontWeight: "bold",
  },

  imgActor: {
    width: 135,
    height: 200,
  },

  descriptionCasting: {
    backgroundColor: "#2A2A2A",
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: 135,
  },

  actorName: {
    color: "white",
  },

  roleName: {
    color: "#bbbbbb",
  },
});
