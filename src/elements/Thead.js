import glamorous from 'glamorous'
import {space, width, fontSize, color} from 'styled-system'

const Thead = glamorous.tbody(space, width, fontSize, color, {})

Thead.defaultProps = {
  width: 1,
}

export default Thead
