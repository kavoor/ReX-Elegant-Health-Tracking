import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import Moment from 'moment';
import PillDesign from '../MedicineComponents/PillDesign';
import ButtonWithImage from '../Button/ButtonWithImage';
import MedicineCard from '../Card/MedicineCard';
import Modal from 'react-native-modal';

const USERNAME = 'Navin';
const MEDICINE_BUTTON_BACKGROUND_COLOR = '#ff99ff';
const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#f2f2f2',
    height: StyleSheet.hairlineWidth,
    marginLeft: 40,
    marginRight: 40
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  header: {
    marginTop: 20,
    padding: 20,
    alignItems: 'center'
  },
  welcomeText: {
    color: 'white',
    fontSize: 60
  },
  subHeader: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subHeaderText: {
    color: '#e5e5e5',
    fontSize: 30
  },
  medicineViewContainer: {
    flex: 1,
    justifyContent: 'space-around'
  },
  medicineViewRow: {
    flexDirection: 'row'
  },
  medicineButton: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    //backgroundColor: MEDICINE_BUTTON_BACKGROUND_COLOR,
    height: 100
  },
  imageStyle: {
    width: 100,
    height: 100
  }
});
const medicineMorning = [
  {
    key: 1,
    title: 'Tylenol',
    quantity: '2 pills',
    dosage: '400 mg',
    time: '6:00 PM',
    pillDesign: 'index1',
    note: 'Take after eating meal.',
    completed: false
  },
  {
    key: 2,
    title: 'Sharpies',
    quantity: '2 pens',
    dosage: '400 mg',
    time: '8:00 AM',
    note: 'Take on empty stomach.',
    pillDesign: 'index1',
    completed: false
  },
  {
    key: 10,
    title: 'Tylenol',
    quantity: '2 pills',
    dosage: '400 mg',
    time: '6:00 PM',
    pillDesign: 'index1',
    note: 'Take after eating meal.',
    completed: false
  },
  {
    key: 11,
    title: 'Sharpies',
    quantity: '2 pens',
    dosage: '400 mg',
    time: '8:00 AM',
    note: 'Take on empty stomach.',
    pillDesign: 'index1',
    completed: false
  }
];
const medicineAfternoon = [
  {
    key: 3,
    title: 'Tylenol',
    quantity: '2 pills',
    dosage: '400 mg',
    time: '6:00 PM',
    pillDesign: 'index1',
    note: 'Take after eating meal.',
    completed: false
  },
  {
    key: 4,
    title: 'Sharpies',
    quantity: '2 pens',
    time: '8:00 AM',
    note: 'Take on empty stomach.',
    pillDesign: 'index1',
    completed: false
  }
];
const medicineEvening = [
  {
    key: 5,
    title: 'Tylenol',
    quantity: '2 pills',
    dosage: '400 mg',
    time: '6:00 PM',
    pillDesign: 'index1',
    note: 'Take after eating meal.',
    completed: false
  },
  {
    key: 6,
    title: 'Sharpies',
    quantity: '2 pens',
    time: '8:00 AM',
    note: 'Take on empty stomach.',
    pillDesign: 'index1',
    completed: false
  }
];
const medicineNight = [
  {
    key: 5,
    title: 'Tylenol',
    quantity: '2 pills',
    dosage: '400 mg',
    time: '6:00 PM',
    pillDesign: 'index1',
    note: 'Take after eating meal.',
    completed: true
  },
  {
    key: 6,
    title: 'Sharpies',
    quantity: '2 pens',
    time: '8:00 AM',
    note: 'Take on empty stomach.',
    pillDesign: 'index1',
    completed: true
  }
];

const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];
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
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: null,
      morning: medicineMorning,
      afternoon: medicineAfternoon,
      evening: medicineEvening,
      night: medicineNight
    };
  }

  _renderButtons() {
    checkMark = (
      <Image
        style={{ left: 20, bottom: 3, width: 100, height: 100, opacity: 1 }}
        source={require('../Resources/checkmark.png')}
      />
    );
    list = [checkMark, checkMark, checkMark, checkMark];
    medicineArray = [
      this.state.morning,
      this.state.afternoon,
      this.state.evening,
      this.state.night
    ];

    for (let y = 0; y < medicineArray.length; y++) {
      for (let x = 0; x < medicineArray[y].length; x++) {
        if (!medicineArray[y][x].completed) {
          list[y] = null;
          break;
        }
      }
    }
    return list;
  }
  _handleMorningPress(index) {
    morningArray = this.state.morning;
    morningArray[index].completed = true;

    this.setState({
      morning: morningArray
    });
  }
  _handleAfternoonPress(index) {
    afternoonArray = this.state.afternoon;
    afternoonArray[index].completed = true;

    this.setState({
      afternoon: afternoonArray
    });
  }
  _handleEveningPress(index) {
    eveningArray = this.state.evening;
    eveningArray[index].completed = true;

    this.setState({
      evening: eveningArray
    });
  }
  _handleNightPress(index) {
    nightArray = this.state.night;
    nightArray[index].completed = true;

    this.setState({
      night: nightArray
    });
  }
  render() {
    let medicineCompletion = this._renderButtons();
    let currentDate = new Date();
    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../Resources/purpleGradient.jpg')}
      >
        <View style={styles.pageContainer}>
          <View>
            <View style={styles.header}>
              <Text style={styles.welcomeText}>Welcome</Text>
              <Text style={styles.welcomeText}>{USERNAME}</Text>
            </View>
            <View style={styles.subHeader}>
              <Text style={styles.subHeaderText}>
                {weekdays[currentDate.getDay()]}
              </Text>
              <Text style={styles.subHeaderText}>
                {months[currentDate.getMonth()]} {currentDate.getDate()}
              </Text>
            </View>
            <View>
              <View style={styles.separator} />
            </View>
          </View>
          <View style={styles.medicineViewContainer}>
            <View style={styles.medicineViewRow}>
              <TouchableOpacity
                style={styles.medicineButton}
                onPress={() =>
                  this.setState({
                    modalVisible: 'morning'
                  })
                }
              >
                <ImageBackground
                  style={styles.imageStyle}
                  source={require('../Resources/morning.png')}
                >
                  {medicineCompletion[0]}
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.medicineButton}
                onPress={() =>
                  this.setState({
                    modalVisible: 'afternoon'
                  })
                }
              >
                <ImageBackground
                  style={styles.imageStyle}
                  source={require('../Resources/afternoon.png')}
                >
                  {medicineCompletion[1]}
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={styles.medicineViewRow}>
              <TouchableOpacity
                style={styles.medicineButton}
                onPress={() =>
                  this.setState({
                    modalVisible: 'evening'
                  })
                }
              >
                <ImageBackground
                  style={styles.imageStyle}
                  source={require('../Resources/evening.png')}
                >
                  {medicineCompletion[2]}
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.medicineButton}
                onPress={() =>
                  this.setState({
                    modalVisible: 'night'
                  })
                }
              >
                <ImageBackground
                  style={styles.imageStyle}
                  source={require('../Resources/night.png')}
                >
                  {medicineCompletion[3]}
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Modal
          onBackdropPress={() => this.setState({ modalVisible: null })}
          onSwipe={() => this.setState({ modalVisible: null })}
          swipeDirection={'down'}
          swipeThreshold={25}
          style={styles.medicineStyle}
          isVisible={this.state.modalVisible == 'afternoon'}
        >
          <View style={{ flex: 0.75 }}>
            <FlatList
              data={this.state.afternoon}
              extraData={this.state}
              renderItem={({ item, index }) => {
                return (
                  <MedicineCard
                    buttonActive={true}
                    title={item.title}
                    timeStamp={item.time}
                    note1={item.quantity + ' ' + item.dosage}
                    note2={item.note}
                    checked={item.completed}
                    onPress={() => this._handleAfternoonPress(index)}
                  />
                );
              }}
            />
          </View>
        </Modal>
        <Modal
          onBackdropPress={() => this.setState({ modalVisible: null })}
          onSwipe={() => this.setState({ modalVisible: null })}
          swipeDirection={'down'}
          swipeThreshold={25}
          style={styles.medicineStyle}
          isVisible={this.state.modalVisible == 'morning'}
        >
          <View style={{ flex: 0.75 }}>
            <FlatList
              data={this.state.morning}
              extraData={this.state}
              renderItem={({ item, index }) => {
                return (
                  <MedicineCard
                    buttonActive={true}
                    title={item.title}
                    timeStamp={item.time}
                    note1={item.quantity + ' ' + item.dosage}
                    note2={item.note}
                    checked={item.completed}
                    onPress={() => this._handleMorningPress(index)}
                  />
                );
              }}
            />
          </View>
        </Modal>
        <Modal
          onBackdropPress={() => this.setState({ modalVisible: null })}
          onSwipe={() => this.setState({ modalVisible: null })}
          swipeDirection={'down'}
          swipeThreshold={25}
          style={styles.medicineStyle}
          isVisible={this.state.modalVisible == 'evening'}
        >
          <View style={{ flex: 0.75 }}>
            <FlatList
              data={this.state.evening}
              extraData={this.state}
              renderItem={({ item, index }) => {
                return (
                  <MedicineCard
                    buttonActive={true}
                    title={item.title}
                    timeStamp={item.time}
                    note1={item.quantity + ' ' + item.dosage}
                    note2={item.note}
                    checked={item.completed}
                    onPress={() => this._handleEveningPress(index)}
                  />
                );
              }}
            />
          </View>
        </Modal>
        <Modal
          onBackdropPress={() => this.setState({ modalVisible: null })}
          onSwipe={() => this.setState({ modalVisible: null })}
          swipeDirection={'down'}
          swipeThreshold={40}
          style={styles.medicineStyle}
          isVisible={this.state.modalVisible == 'night'}
        >
          <View style={{ flex: 0.75 }}>
            <FlatList
              data={this.state.night}
              extraData={this.state}
              renderItem={({ item, index }) => {
                return (
                  <MedicineCard
                    buttonActive={true}
                    title={item.title}
                    timeStamp={item.time}
                    note1={item.quantity + ' ' + item.dosage}
                    note2={item.note}
                    checked={item.completed}
                    onPress={() => this._handleNightPress(index)}
                  />
                );
              }}
            />
          </View>
        </Modal>
      </ImageBackground>
    );
  }
}
export default Home;