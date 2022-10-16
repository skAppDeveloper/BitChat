import React from "react";
import { Calendar } from "react-native-calendars";
import { View } from "react-native";

export default function CalendarComp() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Calendar
        // Specify style for calendar container element. Default = {}
        style={{
          borderWidth: 6,
          borderColor: "green",
          height: 400,
          borderRadius: 20,
          margin: 10,
          marginTop: 30,
          width: 320,
        }}
        // Specify theme properties to override specific styles for calendar parts. Default = {}
        theme={{
          calendarBackground: "#d9e1e8",
          arrowColor: "orange",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "blue",
          indicatorColor: "blue",
          textDayFontFamily: "monospace",
          textMonthFontFamily: "monospace",
          textDayHeaderFontFamily: "monospace",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </View>
  );
}
