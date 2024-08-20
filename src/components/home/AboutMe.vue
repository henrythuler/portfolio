<script>
    import HeaderModel from '../layout/HeaderModel.vue';
    export default {
        components: {
            HeaderModel
        }
    }
</script>

<template>
    <div>
        <HeaderModel>
            <h4>Hello, I'm Henry Thuler!</h4>
        </HeaderModel>
        <h2>I am a <span>Full-Stack Developer</span> Based In Brazil</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum cursus luctus. Pellentesque ac cursus urna. Duis ultrices pellentesque lacus, rutrum ornare arcu pulvinar vitae. Praesent ornare consequat metus, non porta velit. Vestibulum mauris odio, tincidunt suscipit tempor vitae, convallis vitae magna. Proin vehicula nulla tellus, vitae scelerisque dolor aliquam eu. Donec non sollicitudin justo. Integer rutrum est risus, at ultricies odio ultricies in.</p>
    </div>
</template>

<style scoped>
    div{
        width: 100%;
    }
    header{
        max-width: max-content;
    }
    header h4{
        font-weight: 500;
    }
    h2{
        font-size: 3rem;
    }
    h2 span{
        color: #28E98C;
    }
    p{
        font-size: 1.25rem;
    }
</style>