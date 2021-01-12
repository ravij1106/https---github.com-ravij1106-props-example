<template>
    <div>
        <form @submit.prevent="addFriend">
            <div>
                <label>Name : </label>
                <input type="text" v-model="name"/>
            </div>
            <div>
                <label>Email : </label>
                <input type="email" v-model="email"/>
            </div>
            <div>
                <label>Phone : </label>
                <input type="tel" v-model="phone"/>
            </div>
            <div>
                <button>Add Contact</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    emits : ['add-friend'],
    data(){
        return{
            name : '',
            email : '',
            phone : ''
        };
    },
    methods:{
        addFriend(){
            this.$emit('add-friend',this.name, this.email, this.phone);
        }
    }
};
</script>