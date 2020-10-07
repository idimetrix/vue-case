<template>
  <div id="app">
    <div><textarea v-model="text"></textarea></div>
    <table border="1">
      <tr>
        <td>camelCase</td>
        <td>{{ text | camelCase }}</td>
      </tr>
      <tr>
        <td>pascalCase</td>
        <td>{{ text | pascalCase }}</td>
      </tr>
      <tr>
        <td>capitalCase</td>
        <td>{{ text | capitalCase }}</td>
      </tr>
      <tr>
        <td>headerCase</td>
        <td>{{ text | headerCase }}</td>
      </tr>
      <tr>
        <td>titleCase</td>
        <td>{{ text | titleCase }}</td>
      </tr>
      <tr>
        <td>pathCase</td>
        <td>{{ text | pathCase }}</td>
      </tr>
      <tr>
        <td>paramCase</td>
        <td>{{ text | paramCase }}</td>
      </tr>
      <tr>
        <td>dotCase</td>
        <td>{{ text | dotCase }}</td>
      </tr>
      <tr>
        <td>snakeCase</td>
        <td>{{ text | snakeCase }}</td>
      </tr>
      <tr>
        <td>constantCase</td>
        <td>{{ text | constantCase }}</td>
      </tr>
      <tr>
        <td>lowerCase</td>
        <td>{{ text | lowerCase }}</td>
      </tr>
      <tr>
        <td>lowerCaseFirst</td>
        <td>{{ text | lowerCaseFirst }}</td>
      </tr>
      <tr>
        <td>upperCase</td>
        <td>{{ text | upperCase }}</td>
      </tr>
      <tr>
        <td>upperCaseFirst</td>
        <td>{{ text | upperCaseFirst }}</td>
      </tr>
      <tr>
        <td>swapCase</td>
        <td>{{ text | swapCase }}</td>
      </tr>
      <tr>
        <td>sentenceCase</td>
        <td>{{ text | sentenceCase }}</td>
      </tr>
      <tr>
        <td>noCase</td>
        <td>{{ text | noCase }}</td>
      </tr>
      <tr>
        <td>isLowerCase</td>
        <td>{{ text | isLowerCase }}</td>
      </tr>
      <tr>
        <td>isUpperCase</td>
        <td>{{ text | isUpperCase }}</td>
      </tr>
      <tr>
        <td>truncate</td>
        <td>{{ text | truncate(10) }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      text: "I LOVE vue-case",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#app {
  textarea {
    padding: 5px 10px;
    width: 100%;
    display: block;
    box-sizing: border-box;
  }

  table {
    margin: 25px 0;
    width: 50%;

    tr {
      td {
        padding: 5px 10px;
        &:first-child {
          font-weight: bold;
        }

        &:last-child {
          width: 100%;
        }
      }
    }
  }
}
</style>
