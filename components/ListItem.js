import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import GlobalContext from "../context/Context";
import { Grid, Row, Col } from "react-native-easy-grid";
import Avatar from "./Avatar";

export default function ListItem({
  type,
  description,
  user,
  style,
  time,
  room,
  image,
}) {
  const navigation = useNavigation();
  const {
    theme: { colors },
  } = useContext(GlobalContext);
  return (
    <TouchableOpacity
      style={{ height: 80, ...style }}
      onPress={() => navigation.navigate("Chat", { user, room, image })}
    >
      <Grid style={{ maxHeight: 80 }}>
        <Col
          style={{
            width: 60,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar user={user} size={type === "contacts" ? 40 : 50} />
        </Col>
        <Col style={{ marginLeft: 10 }}>
          <Row style={{ alignItems: "center" }}>
            <Col>
              <Text
                style={{
                  color: "white",
                  marginTop: 10,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                {" "}
                {user.contactName || user.displayName}
              </Text>
            </Col>
            {time && (
              <Col style={{ alignItems: "center", marginTop: 26 }}>
                <Text style={{ color: "white", fontSize: 11 }}>
                  {new Date(time.seconds * 1000).toLocaleDateString()}
                </Text>
              </Col>
            )}
          </Row>
          {description && (
            <Row style={{ marginTop: 1 }}>
              <Text style={{ color: "skyblue", fontSize: 15, marginLeft: 5 }}>
                {description}
              </Text>
            </Row>
          )}
        </Col>
      </Grid>
    </TouchableOpacity>
  );
}
