import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';

export default function getStyle(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      backgroundColor: appStyle.calendarBackground,
      paddingTop: 18,
      marginBottom: 120
    },
    placeholder: {
      backgroundColor: appStyle.calendarBackground,
      alignItems: 'center',
      justifyContent: 'center'
    },
    placeholderText: {
      fontSize: 30,
      fontWeight: '200',
      color: appStyle.dayTextColor
    },
    calendar: {
      paddingLeft: 15,
      paddingRight: 15
    }
  });
}
