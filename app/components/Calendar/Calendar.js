import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles/styles.js';
import * as Animatable from 'react-native-animatable';
import Agenda from '../Agenda/Agenda';
const { width } = Dimensions.get('window');

const flatlistData = [
  {
    date: 'March_9_2018',
    data: [
      {
        title: ' Headache',
        timeStamp: '8:00 PM',
        note1: 'Ben is amazing',
        note2: 'Can i get an A? <3',
        iconName: 'headache',
        id: '3'
      },
      {
        title: ' Headache',
        timeStamp: '8:00 PM',
        note1: 'Ben is amazing',
        note2: 'Can i get an A? <3',
        iconName: 'headache',
        id: '4'
      }
    ]
  },

  {
    date: 'March_10_2018',
    data: [
      {
        title: ' PLEASE',
        timeStamp: '8:00 PM',
        note1: 'WORK',
        note2: 'Can i get an A? <3',
        iconName: 'headache',
        id: '5'
      },
      {
        title: ' Headache',
        timeStamp: '8:00 PM',
        note1: 'Ben is amazing',
        note2: 'Can i get an A? <3',
        iconName: 'headache',
        id: '6'
      }
    ]
  },
  {
    date: 'March_15_2018',
    data: [
      {
        title: ' iS this switching',
        timeStamp: '8:00 PM',
        note1: 'Ben is amazing',
        note2: 'Can i get an A? <3',
        iconName: 'headache',
        id: '7'
      },
      {
        title: ' Headache',
        timeStamp: '8:00 PM',
        note1: 'Ben is amazing',
        note2: 'Can i get an A? <3',
        iconName: 'headache',
        id: '8'
      }
    ]
  },
  {
    date: 'March_19_2018',
    data: [
      {
        title: 'Econ',
        timeStamp: 'Will Die',
        note1: '',
        note2: 'WILL THIS FAL',
        iconName: 'headache',
        id: '7'
      },
      {
        title: ' Headache',
        timeStamp: '8:00 PM',
        note1: 'Ben is amazing',
        note2: 'Can i get an A? <3',
        iconName: 'headache',
        id: '8'
      }
    ]
  }
];

class Calendar extends PureComponent {
  static propTypes = {
    currMonth: PropTypes.object
  };

  constructor(props) {
    super(props);

    let backgroundColor = [];

    this.today = this.props.currMonth;
    this.numberOfDays = new Date(
      this.today.getFullYear(),
      this.today.getMonth() + 1,
      0
    ).getDate();

    for (var i = 0; i < this.numberOfDays; i++) {
      backgroundColor.push(0);
    }

    var dot1 = [];
    var dot2 = [];
    var dot3 = [];
    var baseBars = [];

    for (var i = 0; i < this.numberOfDays; i++) {
      dot1[i] = styles.generic;
      dot2[i] = styles.generic;
      dot3[i] = styles.generic;
      baseBars[i] = styles.baseBar;
    }

    this.state = {
      currentAgenda: null,
      backgroundColor: backgroundColor,
      selected: 0,
      dot1: dot1,
      dot2: dot2,
      dot3: dot3,
      graphColor: 'rgba( 0, 0, 0, 0)',
      intensities: [0, 0],
      baseBars: baseBars
    };

    this.graphRefs = [];

    this._onDatePress = this._onDatePress.bind(this);
  }

  componentDidMount() {
    this.initVisualization();
  }

  pullFromDataBase = () => {
    return [
      {
        name: 'blurred',
        symptom: [
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          1,
          0,
          0,
          0,
          1,
          1,
          1,
          1,
          1,
          0,
          0,
          0,
          0,
          1,
          0,
          1,
          0
        ],
        intensities: [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          9,
          10,
          0,
          10,
          0,
          0,
          0,
          6,
          1,
          1,
          3,
          2,
          0,
          0,
          0,
          0,
          5,
          0,
          5,
          0
        ]
      },
      {
        name: 'pill',
        symptom: [
          0,
          1,
          1,
          1,
          1,
          0,
          1,
          0,
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          1,
          1,
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ],
        intensities: [
          0,
          1,
          2,
          3,
          4,
          0,
          6,
          0,
          0,
          9,
          10,
          9,
          10,
          1,
          10,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          2,
          2,
          0,
          9,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        name: 'headache',
        symptom: [
          1,
          0,
          0,
          0,
          1,
          1,
          1,
          0,
          1,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          1,
          1,
          0,
          1,
          0,
          1,
          0,
          1,
          0,
          0,
          0,
          1,
          1,
          1,
          0
        ],
        intensities: [
          2,
          0,
          0,
          0,
          4,
          3,
          6,
          0,
          4,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          10,
          10,
          0,
          2,
          0,
          3,
          0,
          9,
          0,
          0,
          0,
          9,
          6,
          8,
          0
        ]
      }
    ];
  };

  //TODO PULL FROM DB, DATA FORMAT:[{graphColor, symptom, intensities},{},{}]
  initVisualization = () => {
    let monthData = this.pullFromDataBase();

    let dot1 = this.state.dot1;
    let dot2 = this.state.dot2;
    let dot3 = this.state.dot3;

    for (var i = 0; i < monthData.length; i++) {
      monthData[i].symptom.map((val, j) => {
        let tempStyle;
        switch (monthData[i].name) {
          case 'blurred':
            tempStyle = styles.blurred;
            break;
          case 'pill':
            tempStyle = styles.pill;
            break;
          case 'headache':
            tempStyle = styles.headache;
            break;
          default:
            tempStyle = styles.generic;
        }

        if (val == 1) {
          if (this.state.dot1[j] == styles.generic) {
            dot1[j] = tempStyle;
          } else if (this.state.dot2[j] == styles.generic) {
            dot2[j] = tempStyle;
          } else if (this.state.dot3[j] == styles.generic) {
            dot3[j] = tempStyle;
          }
        }
      });
    }

    var color = this.getGraphColor(monthData[0].name);
    this.setState({
      dot1: dot1,
      dot2: dot2,
      dot3: dot3,
      graphColor: color,
      intensities: monthData[0].intensities
    });
  };

  //TODO: pull from global stylesheet
  getGraphColor = type => {
    switch (type) {
      case 'headache':
        return '#6dd3bf80';
      case 'blurred':
        return '#ab87b880';
      case 'pill':
        return '#c3496b80';
      default:
        return '#FFFFFF00';
    }
  };
  /**
    updateVisualization = (type) => {
      let monthData = this.pullFromDataBase();
      for(var i = 0; i < monthData.length; i++){
        if(monthData[i].name == type){
          let color = this.getGraphColor(type);

          this.setState({
            graphColor: color,
            intensities: monthData[i].intensities,
          }, function(){
            this.graphRefs.forEach(function(g) {
              if(g){
                g.slideInUp(500);
              }
            });
          });
          return;
        }
      }
    }

*/
  // DOWN THEN UP
  updateVisualization = type => {
    let monthData = this.pullFromDataBase();
    for (var i = 0; i < monthData.length; i++) {
      if (monthData[i].name == type) {
        let color = this.getGraphColor(type);

        let last = this.graphRefs.length - 1;
        while (last > -1 && this.graphRefs[last] == undefined) {
          last--;
        }

        for (var j = 0; j < this.graphRefs.length; j++) {
          if (this.graphRefs[j]) {
            this.graphRefs[j].transitionTo({ bottom: -31.3 }, 200, 'ease');
            if (j == last) {
              setTimeout(() => {
                this.setState(
                  {
                    graphColor: color,
                    intensities: monthData[i].intensities
                  },
                  function() {
                    this.graphRefs.forEach(function(g) {
                      if (g) {
                        g.transitionTo({ bottom: 0 }, 400, 'ease');
                      }
                    });
                  }
                );
              }, 200);
            }
          }
        }
        return;
      }
    }
  };

  _onDatePress = i => {
    let backgroundColor = [];
    backgroundColor[i] = 1;

    day = (i + 1).toString();
    month = this.renderMonth();
    year = this.renderYear();
    let dayID = month + '_' + day + '_' + year;
    for (var x = 0; x < flatlistData.length; x++) {
      console.log('test: ' + flatlistData[x].date);
      console.log('day id: ' + dayID);
      if (flatlistData[x].date == dayID) {
        this.setState({ currentAgenda: flatlistData[x].data });
        console.log('entered if statement');
      } else {
        console.log('no matches');
        console.log('dayId:  ' + dayID);
        console.log('day: ' + day);
        console.log('month: ' + month);
        console.log('year: ' + year);
      }
    }

    this.setState({ selected: i });
    this.setState({ backgroundColor });
    let dot1 = this.state.dot1;
    let dot2 = this.state.dot2;
    let dot3 = this.state.dot3;
    let baseBars = this.state.baseBars;

    for (var j = 0; j < this.numberOfDays; j++) {
      if (dot1[j] == styles.genericGray) {
        dot1[j] = styles.generic;
      }
      if (dot2[j] == styles.genericGray) {
        dot2[j] = styles.generic;
      }
      if (dot3[j] == styles.genericGray) {
        dot3[j] = styles.generic;
      }
      if (baseBars[j] == styles.baseBarSelected) {
        baseBars[j] = styles.baseBar;
      }
    }

    if (dot1[i] == styles.generic) {
      dot1[i] = styles.genericGray;
    }
    if (dot2[i] == styles.generic) {
      dot2[i] = styles.genericGray;
    }
    if (dot3[i] == styles.generic) {
      dot3[i] = styles.genericGray;
    }
    if (baseBars[i] == styles.baseBar) {
      baseBars[i] = styles.baseBarSelected;
    }

    this.setState({ dot1 });
    this.setState({ dot2 });
    this.setState({ dot3 });
    this.setState({ baseBars });
  };

  _onTitlePress = () => {
    var r = Math.floor(Math.random() * 3);
    if (r == 1) {
      this.updateVisualization('headache');
    } else if (r == 2) {
      this.updateVisualization('pill');
    } else {
      this.updateVisualization('blurred');
    }
  };

  _onHeadachePress = () => {
    let circles = this.state.dot1;
    circles[this.state.selected] = styles.headache;

    this.setState({ dot1: circles });
  };

  _onBlurredPress = () => {
    let circles = this.state.dot2;
    circles[this.state.selected] = styles.blurred;

    this.setState({ dot2: circles });
  };

  _onPillPress = () => {
    let circles = this.state.dot3;
    circles[this.state.selected] = styles.pill;

    this.setState({ dot3: circles });
  };

  dateStyle = function(i) {
    return {
      margin: 2,
      width: Dimensions.get('window').width / 7 - 9,
      justifyContent: 'center',
      alignItems: 'center',
      height: 43,
      backgroundColor: this.state.backgroundColor[i]
    };
  };

  renderWeek() {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return days.map(day => {
      if (day == 'SUN') {
        return (
          <Text key={day} style={styles.weekAlt}>
            {day}
          </Text>
        );
      } else {
        return (
          <Text key={day} style={styles.week}>
            {day}
          </Text>
        );
      }
    });
  }

  renderMonth() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return months[this.today.getMonth()];
  }

  renderYear() {
    return this.today.getFullYear();
  }

  renderDates() {
    const days = [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31'
    ];
    var last = new Date(
      this.today.getFullYear(),
      this.today.getMonth(),
      this.numberOfDays
    );

    var dateGrid = days.slice(0, this.numberOfDays);

    return dateGrid.map((day, i) => {
      let dateStyle = this.state.backgroundColor[i]
        ? styles.altItem
        : styles.item;
      let textStyle = this.state.backgroundColor[i]
        ? styles.altDate
        : styles.date;
      var barHolder = [];
      let h = 0;
      if (this.state.intensities) {
        h = 3.13 * this.state.intensities[i];
      }

      return (
        <TouchableOpacity
          style={dateStyle}
          key={i}
          onPress={() => this._onDatePress(i)}
        >
          <View style={styles.textBox}>
            <Text style={textStyle}>{day}</Text>
          </View>
          <View style={styles.dayBox}>
            <Animatable.View
              ref={b => {
                this.graphRefs[i] = b;
              }}
              duration={400}
              animation="slideInUp"
              style={[
                { backgroundColor: this.state.graphColor, height: h },
                styles.bar
              ]}
            />
            <View style={this.state.baseBars[i]}>
              <View style={styles.circles}>
                <View style={this.state.dot1[i]} />
                <View style={this.state.dot2[i]} />
                <View style={this.state.dot3[i]} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  }

  renderPreviousDates() {
    const days = [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31'
    ];
    var first = new Date(this.today.getFullYear(), this.today.getMonth(), 1);
    var firstDays = new Date(
      this.today.getFullYear(),
      this.today.getMonth(),
      0
    ).getDate();

    if (first.getDay() != 0) {
      var previousGrid = days.slice(firstDays - first.getDay(), firstDays);
    }
    if (previousGrid) {
      return previousGrid.map((day, i) => {
        return (
          <View style={styles.item} key={i}>
            <View style={styles.textBox}>
              <Text style={styles.dateGray}>{day}</Text>
            </View>
            <View style={styles.dayBox}>
              <View style={this.state.baseBar} />
            </View>
          </View>
        );
      });
    }
  }

  renderNextDates() {
    const days = [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31'
    ];
    var last = new Date(
      this.today.getFullYear(),
      this.today.getMonth(),
      this.numberOfDays
    );

    if (last.getDay() != 6) {
      var nextGrid = days.slice(0, 6 - last.getDay());
    }
    if (nextGrid) {
      return nextGrid.map((day, i) => {
        return (
          <View style={styles.item} key={i}>
            <View style={styles.textBox}>
              <Text style={styles.dateGray}>{day}</Text>
            </View>
            <View style={styles.dayBox}>
              <View style={this.state.baseBar} />
            </View>
          </View>
        );
      });
    }
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.head}>
          <TouchableOpacity onPress={() => this._onTitlePress()}>
            <View style={styles.header}>
              <Text style={styles.month}> {this.renderMonth()}</Text>
              <Text style={styles.year}> {this.renderYear()}</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.header2}>{this.renderWeek()}</View>
        </View>

        <View style={styles.tiles}>
          {this.renderPreviousDates()}
          {this.renderDates()}
          {this.renderNextDates()}
        </View>
        <View style={{ flex: 1 }}>
          <Agenda flatlistData={this.state.currentAgenda} />
        </View>
      </View>
    );
  }
}

export default Calendar;