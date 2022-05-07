import { DatePicker } from 'antd'
import './index.css'

interface Iprops {
  addDate: ( date: string) => void;
}
export default function AddDate(props: Iprops) {

  function onChange(value: any) {
    props.addDate(value._d);
  }

  return (
    <div className='addDate' >
      <DatePicker showTime onChange={onChange} />
    </div>
  )

}
