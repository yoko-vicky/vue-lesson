<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" required v-model="email">

    <label>Password:</label>
    <input type="password" required v-model="password">
    <p class="error" v-if="passwordError">{{ passwordError }}</p>

    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills *multiple skills can be added by separating using ','</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill">
    <p v-if="error" class="error">{{ error }}</p>
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="removeSkill(skill)">{{ skill }} x</span>
    </div>

  <div class="terms">
    <input type="checkbox" v-model="terms" required>
    <label>Accept terms and conditions</label>
  </div>

  <div class="submit">
    <button>Create an account</button>
  </div>
</form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms: {{ terms }}</p>
  <p>tempSkill: {{ tempSkill }}</p>
  <p>Skills: {{ skills }}</p>
  <!-- <p>colors: {{ colors }}</p> -->
</template>

<script>
export default {
  data(){
    return {
      email: 'test@test.test',
      password: '',
      role: 'designer',
      terms: false,
      // colors: []
      tempSkill: '',
      skills: [],
      error: '',
      passwordError: ''
    }
  },
  methods: {
    addSkill(e){
      this.error = ''

      if(this.tempSkill && e.key === ','){
        let customTempSkill = this.tempSkill.substring(0, this.tempSkill.length - 1)

        if(this.skills.includes(customTempSkill)){
          this.error = `${customTempSkill} has already been added.`
        } else {
          this.skills.push(customTempSkill)
        }
        this.tempSkill = ''
      }
    },
    removeSkill(skillName){
      this.skills = this.skills.filter((skill)=> skill !== skillName)
    },
    handleSubmit(){
      // validate Password
      this.passwordError = this.password.length < 5 ? 'Password requires more than 5 characters' : ''

      if(!this.passwordError){
        // make request to database to save user
        console.log('email: ', this.email)
        console.log('password: ', this.password)
        console.log('role: ', this.role)
        console.log('skills: ', this.skills)
        console.log('terms accepted: ', this.terms)
      }
    }
  }
}
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
    button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
  }
  .submit {
    text-align: center;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>
