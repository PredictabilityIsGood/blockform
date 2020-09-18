import '@riotjs/hot-reload'
import { mount } from 'riot'
import registerGlobalComponents from './register-global-components'
// register
registerGlobalComponents()
/* Milligram Overrides - https://github.com/milligram/milligram-themes */
// mount all the global components found in this page
mount('[data-riot-component]',{
    elementChildren:[{
        id:0,
        template:"container",
        properties:{},
        children:[{
            id:1,
            template:"row",
            properties:{},
            children:[{
                id:2,
                template:"column",
                properties:{},
                children:[{
                    id:6,
                    template:"banner",
                    properties:{},
                    children:[]
                }]
            }]
        },{
            id:3,
            template:"blockform_form",
            properties:{},
            children:[{
                id:13,
                template:"row",
                properties:{},
                children:[{
                    id:8,
                    template:"column",
                    properties:{},
                    children:[{
                        id:4,
                        template:"blockform_select",
                        properties:{ value:"NY" },
                        children:[{
                            id:11,
                            template:"blockform_option",
                            properties:{ description:"New York", value:"NY" },
                            children:[]
                        },{
                            id:12,
                            template:"blockform_option",
                            properties:{ description:"New Jersey", value:"NJ" },
                            children:[]
                        }]
                    }]
                },{
                    id:9,
                    template:"column",
                    properties:{},
                    children:[{
                        id:10,
                        template:"blockform_input",
                        properties:{ type:"text", value:"12345" },
                        children:[]
                    }]
                }]
            }]
        }]
    }],
    elementTemplates:{
        container:{
            HTML:`<container class="container">
    <template is="component-branch" {...state.properties}></template>
    <script>  
        export default { 
            state:{ 
                properties:{} 
            },
            onBeforeMount(props){
                this.state.properties=props || this.state.properties;
            }
        } 
    </script>
</container>`,
            wrap:false
        },
        row:{
            HTML:`<row class="row">
    <template is="component-branch" {...state.properties}></template>
    <script>  
        export default { 
            state:{ 
                properties:{} 
            },
            onBeforeMount(props){
                this.state.properties=props || this.state.properties;
            }
        } 
    </script>
</row>`,
            wrap:false
        },
        column:{
            HTML:`<column class="column">
    <template is="component-branch" {...state.properties}></template>
    <script>  
        export default { 
            state:{ 
                properties:{} 
            },
            onBeforeMount(props){
                this.state.properties=props || this.state.properties;
            }
        } 
    </script>
</column>`,
            wrap:false
        },
        blockform_label:{
            HTML:`<label>
    {props.text}
    <script>  
        export default { 
            state:{ 
                properties:{} 
            },
            onBeforeMount(props){
                this.state.properties=props || this.state.properties;
            }
        } 
    </script>
</label>`,
            wrap:true,
            defaults:{
                text:"Example Label"
            }
        },
        blockform_form:{
            HTML:`<blockform_form class="w-100">
    <form { ...state.properties }>
        <template is="component-branch" {...state.properties}></template>
    </form>
    <script>  
        export default { 
            state:{ 
                properties:{} 
            },
            onBeforeMount(props){
                this.state.properties=props || this.state.properties;
            },
            onBeforeUpdate(props){
                this.state.properties=props || this.state.properties;
            },
            onMounted(){
                this.update();
            }
        } 
    </script>
</blockform_form>`,
            wrap:false,
            defaults:{
                name:"",
                action:""
            }
        },
        blockform_input:{
            HTML:`  <input { ...state.properties } />
    <script>  
        export default { 
            state:{ 
                properties:{} 
            },
            onBeforeMount(props){
                this.state.properties=props || this.state.properties;
            },
            onBeforeUpdate(props){
                this.state.properties=props || this.state.properties;
            },
            onMounted(){
                this.update();
            }
        } 
    </script>`,
            wrap:true,
            defaults:{
                name:"my-input",
                type:"text",
                placeholder:"enter your text",
                value:"",
                regex:"",
                min:"",
                max:""
            }
        },
        blockform_select:{
            HTML:`  <select {...state.properties} is="blockform_option">
    </select>
    <script>  
        export default { 
            state:{ 
                properties:{} 
            },
            onBeforeMount(props){
                this.state.properties=props || this.state.properties;
            },
            onBeforeUpdate(props){
                this.state.properties=props || this.state.properties;
                this.$('select').querySelectorAll('option').forEach((option)=>{
                    if(option.value===this.state.properties.value){
                        option.setAttribute('selected',true);
                    }
                    else{
                        option.removeAttribute('selected');
                    }
                })
            },
            onMounted(){
                this.update();
            }
        } 
    </script>`,
            wrap:true,
            defaults:{
                name:"my-select",
                placeholder:"select your choice",
                multiple:false
            }
        },
        blockform_submit:{
            HTML:`  <input class="button-primary" type="submit" { ...state.properties } />
    <script>  
        export default { 
            state:{ 
                properties:{} 
            },
            onBeforeMount(props){
                this.state.properties=props || this.state.properties;
            },
            onBeforeUpdate(props){
                this.state.properties=props || this.state.properties;
            },
            onMounted(){
                this.update();
            }
        } 
    </script>`,
            wrap:true,
            defaults:{
                name:"my-input",
                value:"submit",
            }
        },
        blockform_option:{
            HTML:`<blockform_option>
    <option each={ element in state.properties.elementChildren } {...element.properties}>{element.properties.description}</option>
    <script>  
        export default { 
            state:{ 
                properties:{} 
            },
            onBeforeMount(props){
                this.state.properties=props || this.state.properties;
            },
            onBeforeUpdate(props){
                this.state.properties=props || this.state.properties;
            },
            onMounted(){
                this.update();
            }
        } 
    </script>
</blockform_option>`,
            wrap:false,
            defaults:{
                selected:false,
                value:"optionvalue",
                description:"Option Description"
            }
        },
        banner:{
            HTML:`<banner>
    <div 
        class="banner" 
        style="background-image:url('{state.url}');height:{state.height};margin:{state.marginTop} {state.marginRight} {state.marginBottom} {state.marginLeft};">
    </div>
    <style>
        .banner{
            background-size:cover;
        }
    </style>
    <script>
        export default {
            state:{
                url:"",
                height:"",
                marginTop:"",
                marginBottom:"",
                marginLeft:"",
                marginRight:""
            },
            onBeforeMount(props){
                this.state.url=props.url || this.state.url;
                this.state.height=props.height || this.state.height;
                this.state.marginTop=props.marginTop || this.state.marginTop;
                this.state.marginBottom=props.marginBottom || this.state.marginBottom;
                this.state.marginLeft=props.marginLeft || this.state.marginLeft;
                this.state.marginRight=props.marginRight || this.state.marginRight;
            },
            onBeforeUpdate(props){
                this.state.url=props.url || this.state.url;
                this.state.height=props.height || this.state.height;
                this.state.marginTop=props.marginTop || this.state.marginTop;
                this.state.marginBottom=props.marginBottom || this.state.marginBottom;
                this.state.marginLeft=props.marginLeft || this.state.marginLeft;
                this.state.marginRight=props.marginRight || this.state.marginRight;
            }
        }
    </script>
</banner>`,
            wrap:false,
            defaults:{
                url:"https://www.liu.edu/~/media/8D1A6B65E713440B8C6C08AAF5A7720C.ashx",
                height:"400px",
                marginTop:"20px",
                marginBottom:"20px",
                marginLeft:"0",
                marginRight:"0"
            }
        },
    }
})