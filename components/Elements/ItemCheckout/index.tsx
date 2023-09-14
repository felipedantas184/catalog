import { Divider, FlexRowSB, Text, TextSemiBold } from "../styles"
import { Option, Select } from "./styles"

const ItemCheckout = ({title, options}:any) => {
  return (
    <>
      <FlexRowSB style={{width: '100%', paddingLeft: 8, paddingRight: 8}} >
        <TextSemiBold>{title}</TextSemiBold>
        <Select>
          {options.map((item:string, index:any) => (
            <Option key={index}>{item}</Option>
          ))}
        </Select>
      </FlexRowSB>
      <Divider />
    </>
  )
}

export default ItemCheckout