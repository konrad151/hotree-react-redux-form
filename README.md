# Hotree React redux form app

Hotree is simple React redux form for publishing events.

<a href="https://konrad151.usermd.net/myprojects/hotree-react-redux-form/index.html" target="_blank">Preview working demo</a>

**Events in app:**
- can be free or paid
- have a coordinator in charge
- have rewards points which users can collect for attendance

**Specification:**
- The form has validation
- Fields `title`, `description`, `date`, `coordinator` and `payment` are mandatory.
- Description field has 140 character limit.
- There is a character counter below the description field.
- Events can’t be created prior to the actual date.
- It use HTML5 `date` and `time` input despite lack of support in all browsers.
- Output date format looks like `YYYY-MM-DDTHH:mm`
- In case of paid events, fee input appears only when payment
field is filled
- Select options are from JSON files
- Coordinator field has a default selected option with currently logged in user (id=3), this option is always on the top of the list
- The `email` field has an appropriate format.

After successful validation all the data from the form is displayed using console.log.

**Output data structure:**
```js
{
  title: string,
  description: string,
  category_id: number,
  paid_event: boolean,
  event_fee: number,
  reward: number,
  date: string, // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
  duration: number, // in seconds
  coordinator: {
    email: string,
    id: string,
  },
}
```



## Installation

Install the dependencies
```
$ npm install
```
### Serve
Serve on localhost:3000
```
$ npm start
```