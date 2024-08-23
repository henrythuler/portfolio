<template>
    <div class="container">
        <HeaderModel>
            <nav>
                <ul>
                    <li><router-link to="/home">Home</router-link></li>
                    <li><router-link to="/skills">Skills</router-link></li>
                </ul>
            </nav>
            <h1>THULER</h1>
            <nav>
                <ul>
                    <li><router-link to="/projects">Projects</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>
            </nav>
        </HeaderModel>
    </div>
</template>

<style scoped>
    div{
        margin-top: 2rem;
        margin-bottom: 6rem;
        animation: loadDown ease-in 1s forwards;
    }
    header{
        width: 100%;
    }
    h1{
        font-size: 2.5rem;
        font-family: "Jost", sans-serif;
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
        transition: all ease-in-out .3s;
    }
    nav ul li a.router-link-active{
        background-color: #28E98C;
    }
    nav ul li a:hover{
        background-color: #28E98C;
    }
</style>