import {configure} from '@storybook/react'

import "../src/styles/index.scss"

// import all files ending with *.stories.js
configure(require.context('../src', true, /\.stories\.tsx$/),module)