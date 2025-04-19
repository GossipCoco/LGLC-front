<template>
  <div class="display-flex-column flex-one">
    <table class="table table-borderless text-white">
      <tr>
        <td>
          <span class="text-white"><strong>Clan</strong></span>
        </td>
        <td>{{ NameClan }}</td>
      </tr>
      <tr>
        <td>
          <span class="text-white"><strong>Genre</strong></span>
        </td>
        <td>{{ genre }}</td>
      </tr>
      <tr>
        <td>
          <span class="text-white"><strong>Grade</strong></span>
        </td>
        <td>{{ Grade }}</td>
      </tr>
      <tr></tr>
      <tr>
        <td>
          <span class="text-white"><strong>Chaton</strong></span>
        </td>
        <td>{{ kitty }}</td>
      </tr>
      <tr>
        <td>
          <span class="text-white"><strong>Apprenti</strong></span>
        </td>
        <td>{{ apprentice }}</td>
      </tr>
      <tr>
        <td>
          <span class="text-white"><strong>Guerrier</strong></span>
        </td>
        <td>{{ warrior }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "TableInformationCharacter",
  props: ["NameClan", "genre", "Grade", "kitty", "apprentice", "warrior"],
};
</script>