import React from 'react'
import {StyleSheet, Text, View, Header, ScrollView, TouchableOpacity, Picker} from 'react-native'
import ScaleSlideInputType from './ScaleSlideInputType'
import TextInputType from './TextInputType'
import PickerInputType from './PickerInputType'
import NumericalPickerInputType from './NumericalPickerInputType'
import ChecklistInputType from './ChecklistInputType'

export default class App extends React.Component {
  onSubmit (value) {
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.main_container}>
          <ChecklistInputType
            list_values={['Light sensitivity', 'Sound sensitivity', 'Nausea', 'Pulsatile tinnitus', 'Scalp pain (allodynia)', 'Back pain', 'Neck pain']}
            input_style={styles.input_container_green}
            title_text_style={styles.title_text}
            title_text={'Associated Symptoms'} />
          <PickerInputType
            input_style={styles.input_container_green}
            title_text_style={styles.title_text}
            value={'Sharp'}
            picker_values={['Pressure-like', 'Sharp', 'Throbbing']}
            title_text={'Type of Headache'} />
          <ScaleSlideInputType
            input_style={styles.input_container_blue}
            title_text_style={styles.title_text}
            max_val={4}
            value={2}
            scale_labels={['None', 'A Little', 'Medium', 'A Lot', 'Horrible']}
            title_text={'Intensity'} />
          <PickerInputType
            input_style={styles.input_container_green}
            title_text_style={styles.title_text}
            value={'Top of Head'}
            picker_values={['Back of Head', 'Top of Head', 'Forehead']}
            title_text={'Location of Pain'} />
          <PickerInputType
            input_style={styles.input_container_blue}
            title_text_style={styles.title_text}
            value={'Naproxen'}
            picker_values={['Tylenol', 'Ibuprofen', 'Naproxen', 'Excedrin', 'Fioricet']}
            title_text={'Medication Needed'} />
          <TextInputType
            input_style={styles.input_container_green}
            title_text_style={styles.title_text}
            placeholder_text={'Type here...'}
            title_text={'Other Symptoms'} />
          <NumericalPickerInputType
            input_style={styles.input_container_blue}
            title_text_style={styles.title_text}
            value={3}
            min={0}
            max={6}
            unit={'hours'}
            title_text={'Duration of Pain'} />
          <TouchableOpacity style={styles.submit_button}>
            <Text style={styles.submit_text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title_text: {
    fontSize: 20,
    color: '#e5e5e5',
    paddingBottom: 10
  },
  input_container_blue: {
    width: 320,
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#2D6D84',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#2D6D84'
  },
  input_container_green: {
    width: 320,
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#2D8464',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#2D8464'
  },
  submit_button: {
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'bottom',
    width: 320,
    alignItems: 'center',
    backgroundColor: '#bf5252',
    padding: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#bf5252'
  },
  submit_text: {
    color: 'white',
    fontSize: 25
  }
})