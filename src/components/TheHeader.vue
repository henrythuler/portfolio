<script>
    import HeaderModel from './layout/HeaderModel.vue';
    export default {
        components: {
            HeaderModel
        }
    }
</script>

<template>
    <div class="container">
        <HeaderModel>
            <nav>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li><a href="">Skills</a></li>
                </ul>
            </nav>
            <h1>THULER</h1>
            <nav>
                <ul>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </HeaderModel>
    </div>
</template>

<style scoped>
    h1{
        font-size: 2.5rem;
    }
    nav{
        -webkit-box-flex: 1;
            -ms-flex: 1;
                flex: 1
    }
    nav ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
            justify-content: space-around;
        list-style-type: none;
    }
    nav ul li a{
        text-decoration: none;
        color: white;
        font-weight: 500;
        font-size: 1.1rem;
        padding: .75rem 1.5rem;
        border-radius: 3rem;
    }
    nav ul li a:hover{
        background-color: #28E98C;
    }
</style>