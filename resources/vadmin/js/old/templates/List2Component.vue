<template>
    <div>
      <table class="table">
        <thead>
            <tr>
                <slot name="rows"></slot>
                <!-- <th v-for="(title, index) in tableTitles" :key="index"> {{ title }}</th> -->
                <th>Editar</th>
                <th>Eliminar</th>
            </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="(item, index) in items" :key="index">
            <td v-for="(dataName, index) in dataNames" :key="index">
              {{ item[dataName] }}
            </td>
            <td><button class="btn item" @click="setUpdateOrCreate('update', item)"><i class="fas fa-edit icon-edit"></i></button></td>
            <td><button class="btn item" @click="deleteItem(`/users/${item.id}`,item, 'Desea eliminar el usuario ?')"><i class="far fa-trash-alt icon-delete"></i></button></td>
          </tr> -->
        </tbody>
      </table>
    </div>
</template>

<script>
    export default  { 
        props: ['items', 'tableTitles', 'dataNames']
    };
</script>