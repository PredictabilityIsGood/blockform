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
    <option key={element.id} each={ element in state.properties.elementChildren } {...element.properties}>{element.properties.description}</option>
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
        "widget-grid":{
            HTML:`<widget-grid>
            <table class="p-0 m-0 table table-hover table-sm" 
            onkeyup="{controlModifier}" 
            onkeydown="{controlModifier}" 
            onclick="{(e)=>tableClick(e)}"
            onmousedown="{(e)=>tableMouseDown(e)}"
            onmouseup="{(e)=>tableMouseUp(e)}"
            onmouseover="{(e)=>tableMouseOver(e)}"
            onmouseout="{(e)=>tableMouseOut(e)}">
                <thead class="widget-grid-header thead-{state.theme.bg} bg-{state.theme.bg} text-{state.theme.text}">
                    <tr>
                        <th class="cell-counter border-{state.theme.border} text-muted">#</th>
                        <th onclick="{()=>sort(key)}" class="c-pointer text-left button-{state.theme.bg} border-{state.theme.border}  row-header" if="{key in state.options && state.options[key].visible==true}" each="{key in state.datakeys}" scope="col">{state.options[key].alias || key} 
                            <span class="float-right w-0">
                                <span if="{state.sort[key] && state.sort[key].type=='DESC'}" id="{key+'-DESC'}" class="order-desc">
                                        &#10142;
                                </span>
                                <span if="{state.sort[key] && state.sort[key].type=='ASC'}" id="{key+'-ASC'}" class="order-asc">
                                        &#10142;
                                </span>
                            </span>
                        </th>
                        <th class="cell-counter border-{state.theme.border} text-muted">
                            <label class="widget-grid-checkbox">
                                <input onclick="{toggleAll}" type="checkbox" checked="{state.all}"/>
                                <span class="checkmark"></span>
                            </label>
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-{state.theme.bg} text-{state.theme.text}">
                    <tr if="{state.data.length==0}">
                        <td colspan="{visibleCols()+3}" class="lead text-center">No records found!</td>
                    </tr>
                    <tr if="{isVisible(index)}"  
                        each="{(row,index) in state.data}" 
                        key="{row}"
                        class="{getRowKey(row) in state.operations.put?'action-'+state.operations.put[getRowKey(row)].status:''} {getRowKey(row) in state.operations.post?'action-'+state.operations.post[getRowKey(row)].status:''}"
                        onclick="{(e)=>rowClick(e,index,row)}"
                        onmousedown="{(e)=>rowMouseDown(e,index,row)}"
                        onmouseup="{(e)=>rowMouseUp(e,index,row)}"
                        onmouseover="{(e)=>rowMouseOver(e,index,row)}"
                        onmouseout="{(e)=>rowMouseOut(e,index,row)}">
                        <td class="cell-control cell-counter border-{state.theme.border}">
                            <span class="row-menu-wrapper">
                                {index+1}
                            </span>
                        </td>
                        <td if="{key in state.options && state.options[key].visible==true}" 
                            key="{key}"
                            class="cell-control c-pointer border-{state.theme.border}" 
                            each="{key in state.datakeys}" 
                            onclick="{ (e)=>cellClick(e,index,key) }"
                            onmousedown="{ (e)=>cellMouseDown(e,index,key) }"
                            onmouseup="{ (e)=>cellMouseUp(e,index,key) }"
                            onmouseover="{ (e)=>cellMouseOver(e,index,key) }"
                            onmouseout="{ (e)=>cellMouseOut(e,index,key) }"> 
                            <span if="{state.pathstr!=JSON.stringify([index,key]) || (!state.options[key].put) || (!state.tableOptions.put)}">
                                <template if="{state.options[key].tag && !rowDataUnavailable(row) }" key="tag">
                                    <div is="{cellTagName(key)}" {...cellTagScope(row,key)}></div>
                                </template>
                                <template if="{state.options[key].slot}" key="slot">
                                    <slot name="{key}" {...cellSlotScope(row,key)} />
                                </template>
                                <div if="{!state.options[key].tag}">
                                    <div if="{state.options[key].type==Image}" class="rounded ppr-sdw table-img" style="background-image: url({row[key]})"></div>
                                    {state.options[key].type != Image ? row[key] : ''}
                                </div>
                            </span>
                            <label if="{ getInputType(state.options[key].type) == 'checkbox' && state.pathstr==JSON.stringify([index,key]) && state.options[key].put && state.tableOptions.put  }" 
                                class="widget-grid-checkbox widget-grid-checkbox-ctrl">
                                <input 
                                    class="w-100" id="{'input-control-'+index+'-'+key+'-'+state.pkidstr }" 
                                    type="{ getInputType(state.options[key].type) }" value="{state.data[index][key]}" 
                                    onchange="{applyPut}" onkeydown="{control}"
                                    onblur="{()=>leavetable([index,key])}"/>
                                <span class="checkmark"></span>
                            </label>
                            <div if="{ getInputType(state.options[key].type) != 'checkbox' &&  state.pathstr==JSON.stringify([index,key]) && state.options[key].put && state.tableOptions.put  }">
                                <input 
                                    class="w-100" id="{'input-control-'+index+'-'+key+'-'+state.pkidstr }" 
                                    type="{ getInputType(state.options[key].type) }" value="{state.data[index][key]}" 
                                    onchange="{applyPut}" onkeydown="{control}"
                                    onblur="{()=>leavetable([index,key])}"/>
                            </div>
                        </td>
                        <td class="cell-control cell-counter {state.tableOptions.delete ? 'c-pointer':'' } border-{state.theme.border}">
                            <label class="widget-grid-checkbox ">
                                <input data-selectkey="{getRowKey(row)}" onclick="{toggleRow}" checked="{getRowKey(row) in state.selected}" type="checkbox"/>
                                <span class="checkmark"></span>
                            </label>
                        </td>
                    </tr>
                    <tr if="{state.mode=='post'}" id="widget-grid-new">
                        <td onclick="{applyPost}" class="cell-control cell-counter cell-post c-pointer border-{state.theme.border} ">
                            <span class="badge badge-secondary button button-small button-clear footer-cell-control-record">
                                add
                            </span>
                        </td>
                        <td if="{key in state.options && state.options[key].visible==true}" 
                            each="{key in state.datakeys}">
                            <input  id="{'new-insert-'+key}" data-postkey="{key}" class="w-100" 
                                    type="{ getInputType(state.options[key].type) }"
                                    onfocus="{clearAll}"
                                    onchange="{editPost}" value="{key in state.new ? state.new[key] : null}"/>
                        </td>
                        <td class="cell-control cell-counter border-{state.theme.border} ">
                        </td>
                    </tr>
                </tbody>
                <tfoot class="bg-{state.theme.bg} text-{state.theme.text}">
                    <tr if="{state.tableOptions.footer}">
                        <td class="footer-cell-control border-0" 
                            colspan="1">
                            <span class="badge badge-secondary c-pointer d-none">
                                <div class="rotate-45 bigger">
                                    &#9906;
                                </div>
                            </span>
                        </td>
                        <td  class="footer-cell-control" 
                            colspan="{visibleCols()}">
                            <span if="{state.tableOptions.pagination}">
                                <span>
                                    <select class="footer-cell-control-page-select" onchange="{setPageCount}">
                                        <option val="1">1</option>
                                        <option val="10" selected>10</option>
                                        <option val="25">25</option>
                                        <option val="50">50</option>
                                        <option val="100">100</option>
                                    </select>
                                </span>
                                <span class="ml-3">
                                    <button class="footer-pagination-button button button-small button-clear" if="{state.pagination.page>1}" type="button" onclick="{setPage}" value="1">&#8676;</button>
                                    <button class="footer-pagination-button button button-small button-clear" if="{state.pagination.page>1}" type="button" onclick="{setPage}" value="{state.pagination.page-1}">{state.pagination.page-1}</button>
                                    page
                                    <input class="footer-cell-control-page-input" type="number" value="{state.pagination.page}" onchange="{setPage}">
                                    <button class="footer-pagination-button button button-small button-clear" if="{state.pagination.page<Math.floor(state.data.length/state.pagination.show)}" type="button" onclick="{setPage}" value="{state.pagination.page+1}">{state.pagination.page+1}</button>
                                    <button class="footer-pagination-button button button-small button-clear" if="{state.pagination.page<Math.floor(state.data.length/state.pagination.show)}" type="button" onclick="{setPage}" value="{Math.ceil(state.data.length/state.pagination.show)}">&#8677;</button>
                                    of { state.pagination.max }
                                </span>
                                <span class="ml-3">
                                    displaying {state.pagination.start+1} to { state.data.length < state.pagination.end-1 ? state.data.length : state.pagination.end-1 } of { state.data.length }
                                </span>
                            </span>
                        </td>
                        <td class="cell-counter cell-counter-bottom c-pointer text-right border-{state.theme.border}">
                            <span onclick="{postMenu}" if="{state.tableOptions.post}" class="badge badge-success">
                                <span if="{state.mode!='post'}" class="button button-small button-clear footer-cell-control-record">ADD</span>
                                <span if="{state.mode=='post'}" class="button button-small button-clear footer-cell-control-record">HIDE</span>
                            </span>
                        </td>
                        <td class="cell-counter cell-counter-bottom">
                            <span onclick="{applyDelete}" if="{state.tableOptions.delete && state.selectedcnt > 0}" class="badge badge-danger c-pointer position-relative table-action">
                                <span class="button button-small button-clear footer-cell-control-record">DELETE</span>
                                <div class="toast position-absolute d-none" >
                                    <div class="toast-header">
                                        <strong class="mr-auto">To Be Deleted</strong>
                                        <small>  Items</small>
                                    </div>
                                    <div class="toast-body text-muted row-header">
                                        The following items will be deleted
                                        <ul class="list-group mt-2">
                                            <li class="list-group-item " each="{value in Object.values(state.selected)}">
                                                { JSON.stringify(value) }
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </span>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <style>
                :root {
                    --widget-grid-font-scale: 1;
                }
                table { 
                    line-height:1.5rem;
                }
                .action-success.bg-light{
                    background-color: #f8f9fa;
                }
                .ml-3{
                    margin-left:1rem;
                }
                .w-100 {
                    width:100%;
                }
                
                /* Safari 4.0 - 8.0 */
                @-webkit-keyframes successTransition {
                    1% {
                        background-color: #28a745 ;
                        color:white ;
                    }
                    50% {
                        /* theme selection */
                        background-color: #28a745 ;
                        color:white ;
                    }
                }
        
                @-moz-keyframes successTransition {
                    1% {
                        background-color: #28a745 ;
                        color:white ;
                    }
                    50% {
                        /* theme selection */
                        background-color: #28a745 ;
                        color:white ;
                    }
                }
        
                @-o-keyframes successTransition {
                    1% {
                        background-color: #28a745 ;
                        color:white ;
                    }
                    50% {
                        /* theme selection */
                        background-color: #28a745 ;
                        color:white ;
                    }
                }
        
                /* Standard syntax */
                @keyframes successTransition {
                    1% {
                        background-color: #28a745 ;
                        color:white ;
                    }
                    50% {
                        /* theme selection */
                        background-color: #28a745 ;
                        color:white ;
                    }
                }
                table .action-success {
                    -webkit-animation:successTransition 2s ease-in-out !important;
                    -moz-animation:successTransition 2s ease-in-out !important;
                    -o-animation:successTransition 2s ease-in-out !important;
                    animation:successTransition 2s ease-in-out !important;
                }
                /* Safari 4.0 - 8.0 */
                @-webkit-keyframes processingTransition {
                    1% {
                        background-color: #ffc107 ;
                        color:black ;
                    }
                    50% {
                        /* theme selection */
                        background-color: #ffc107 ;
                        color:black ;
                    }
                }
        
                @-moz-keyframes processingTransition {
                    1% {
                        background-color: #ffc107 ;
                        color:black ;
                    }
                    50% {
                        /* theme selection */
                        background-color: #ffc107 ;
                        color:black ;
                    }
                }
        
                @-o-keyframes processingTransition {
                    1% {
                        background-color: #ffc107 ;
                        color:black ;
                    }
                    50% {
                        /* theme selection */
                        background-color: #ffc107 ;
                        color:black ;
                    }
                }
        
                /* Standard syntax */
                @keyframes processingTransition {
                    1% {
                        background-color: #ffc107;
                        color:black;
                    }
                    50% {
                        /* theme selection */
                        background-color: #ffc107;
                        color:black;
                    }
                }
                table .action-processing {
                    -webkit-animation:processingTransition 2s ease-in-out !important;
                    -moz-animation:processingTransition 2s ease-in-out !important;
                    -o-animation:processingTransition 2s ease-in-out !important;
                    animation:processingTransition 2s ease-in-out !important;
                }
                /* Safari 4.0 - 8.0 */
                @-webkit-keyframes failureTransition {
                    1% {
                        background-color: #dc3545 ;
                        color:#fff ;
                    }
                    50% {
                        /* theme selection */
                        background-color: #dc3545 ;
                        color:#fff ;
                    }
                    100%{
                        background-color: #dc3545 ;
                        color:#fff ;
                    }
                }
                @-moz-keyframes failureTransition {
                    1% {
                        background-color: #dc3545 ;
                        color:#fff ;
                    }
                    50% {
                        /* theme selection */
                        background-color: #dc3545 ;
                        color:#fff ;
                    }
                    100%{
                        background-color: #dc3545 ;
                        color:#fff ;
                    }
                }
                @-o-keyframes failureTransition {
                    1% {
                        background-color: #dc3545 ;
                        color:#fff ;
                    }
                    50% {
                        /* theme selection */
                        background-color: #dc3545 ;
                        color:#fff ;
                    }
                    100%{
                        background-color: #dc3545 ;
                        color:#fff ;
                    }
                }
                /* Standard syntax */
                @keyframes failureTransition {
                    1% {
                        background-color: #dc3545 ;
                        color:#fff ;
                    }
                    50% {
                        /* theme selection */
                        background-color: #dc3545 ;
                        color:#fff ;
                    }
                    100%{
                        background-color: #dc3545 ;
                        color:#fff ;
                    }
                }
                .action-failure {
                    -webkit-animation:failureTransition 2s ease-in-out forwards !important;
                    -moz-animation:failureTransition 2s ease-in-out forwards !important;
                    -o-animation:failureTransition 2s ease-in-out forwards !important;
                    animation:failureTransition 2s ease-in-out forwards !important;
                }
        
                .table-action .toast{
                    right:20px;
                    bottom:20px;
                }
                .table-action:hover .toast{
                    opacity:1;
                }
                .table-action .list-group {
                    max-height:40px;
                    overflow:auto;
                }
                .border-dark {
                    border-color:#454d55 !important;
                }
                .border-light {
                    border-color:#dee2e6 !important;
                }
                .cell-post {
                    min-width:45px !important;
                    max-width:45px !important;
                    width:45px !important;
                }
                .cell-counter {
                    min-width:50px;
                    max-width:50px;
                    width:50px;
                    border-bottom:1px solid;
                    font-weight:300;
                    line-height:1.5rem;
                    overflow:hidden;
                }
                .d-none {
                    display:none;
                }
                .cell-counter-bottom {
                    border-bottom:none;
                }
                .row-header {
                    font-weight:400;
                }
                .row-menu-wrapper {
                    position:relative;
                    white-space:nowrap;
                }
                .row-menu {
                    position:absolute;
                    left:20px;
                    top:5px; 
                }
                input {
                    margin-bottom:0;
                }
                select {
                    margin-bottom:0;
                }

                .footer-cell-control {
                    outline:none;
                    border-top:none !important;
                    border-bottom:none !important;
                    font-weight:300;
                    padding-top:.5rem;
                    padding-bottom:.5rem;
                }
                .footer-pagination-button {
                    height:1.3rem;
                    line-height:.9rem;
                }
                
                .footer-cell-control-page-input{
                    width:50px;
                    height:2.3rem;
                    font-weight:300;
                    margin:0;
                    margin-right: 1rem;
                }
                .footer-cell-control-record {
                    height: 1.3rem;
                    line-height: 1.3rem;
                    margin: 0;
                    padding: 0;
                }
                .footer-cell-control-page-select {
                    width: auto;
                    height: 2.3rem;
                    font-weight: 300;
                    margin:0;
                    margin-right: 1rem;
                    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 8" width="15"><path fill="%23d1d1d1" d="M0,0l6,8l6-8"/></svg>') center right no-repeat;
                    padding-right: 1rem;
                    padding-bottom: 0;
                    padding-top: 0;
                }
                
                .footer-cell-control-page-select:focus {
                    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 8" width="15"><path fill="%239b4dca" d="M0,0l6,8l6-8"/></svg>');
                }

                .order-desc{
                    display:inline-block;
                    -webkit-transform: rotateZ(90deg); /* Safari prior 9.0 */
                    transform: rotateZ(90deg); /* Standard syntax */
                }
                .order-asc{
                    display:inline-block;
                    -webkit-transform: rotateZ(-90deg); /* Safari prior 9.0 */
                    transform: rotateZ(-90deg); /* Standard syntax */
                }
                .rotate-45{
                    -webkit-transform: rotateZ(45deg); /* Safari prior 9.0 */
                    transform: rotateZ(45deg); /* Standard syntax */
                }
                .bigger {
                }
                .c-pointer{
                    cursor:pointer;
                }
                .widget-grid-header * {
                    user-select: none; /* CSS3 (little to no support) */
                -ms-user-select: none; /* IE 10+ */
                -moz-user-select: none; /* Gecko (Firefox) */
            -webkit-user-select: none; /* Webkit (Safari, Chrome) */
                }
                input[type="checkbox"],input[type="radio"]{
                    height:15px;
                    outline:none!important;
                }
                .table-hover tbody tr:hover td {
                    background-color:rgba(0,0,0,.075)!important;
                }
                .widget-grid-checkbox {
                    position:relative;
                    cursor:pointer;
                    display:inline-block;
                    margin-bottom:13px;
                }
        
                .widget-grid-checkbox:hover input ~ .checkmark {
                    background-color:#6c757d;
                }
                .widget-grid-checkbox input:checked ~ .checkmark {
                    background-color: #20c997;
                }
                .widget-grid-checkbox-ctrl input:checked ~ .checkmark {
                    background-color:#6f42c1;
                }
                .widget-grid-checkbox .checkmark:after {
                    content: "";
                    position: absolute;
                    display: none;
                    border:solid #f8f9fa;
                }
                .widget-grid-checkbox input:checked ~ .checkmark:after {
                    display:block;
                }
                .widget-grid-checkbox .checkmark:after {
                    left: 6px;
                    top: 3px;
                    width: 3px;
                    height: 8px;
                    border: solid white;
                    border-width: 0 1px 1px 0;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                }
                .widget-grid-checkbox input[type="checkbox"] {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height: 0;
                    width: 0; 
                }
                .widget-grid-checkbox .checkmark {
                    position: absolute;
                    top: 0;
                    left: 2px;
                    height: 15px;
                    width: 15px;
                    background-color: #e4e4e4;
                    border-radius:50%;
                    padding-right:10px;
                }
        
            </style>
            <script>
                export default {
                    state: {
                        data:[],
                        operations:{
                            put:{},
                            post:{},
                            delete:{}
                        },
                        new:{},
                        external:{},
                        selected:{},
                        selectedcnt:0,
                        path:[],
                        pathstr:"",
                        datakeys:[],
                        shiftmodifier:false,
                        tabbed:false,
                        pagination:{},
                        callbacks:{},
                        options:{},
                        tableOptions:{},
                        rowOptions:{},
                        sort:{},
                        theme:{},
                        listeners:{},
                        firstRun:true,
                        mode:"",
                        all:false,
                        mountCell:true,
                        pointer:{
                            global:{
                                mousedown:false,
                                mousedownStack:[],
                                content:null
                            },
                            default:{
                                table:{
                                    delay:{
                                        click:500,
                                        hold:1500,
                                        hover:2000,
                                    },
                                    mousedown:false,
                                    cancelhold:false,
                                    canceldrag:false,
                                    mouseover:false,
                                    cancelhover:false,
                                    over:0,
                                    hold:0,
                                    click:0
                                },
                                row:{
                                    delay:{
                                        click:500,
                                        hold:1500,
                                        hover:2000,
                                    },
                                    mousedown:false,
                                    cancelhold:false,
                                    canceldrag:false,
                                    mouseover:false,
                                    cancelhover:false,
                                    over:0,
                                    hold:0,
                                    click:0
                                },
                                cell:{
                                    delay:{
                                        click:500,
                                        hold:1500,
                                        hover:2000,
                                    },
                                    mousedown:false,
                                    cancelhold:false,
                                    canceldrag:false,
                                    mouseover:false,
                                    cancelhover:false,
                                    over:0,
                                    hold:0,
                                    click:0
                                }
                            },
                            table:{
                                //dynamically created upon mounted state (cleared upon bind)
                            },
                            row:{
                                //dynamically created based on row index (cleared upon bind)
                            },
                            cell:{
                                //dynamically created based on row index and column key (cleared upon bind)
                            }
                        }
                    },
                    debugMode:false,
                    debug:{
                        data:[
                                {
                                    "Id":1,
                                    "Name":"Ryan",
                                    "Age":27,
                                    "Email":"test@test.com",
                                    "Is":false,
                                    "StartDate":"2018-01-01T00:00:01",
                                    "State":"NY",
                                    "City":"Glen Cove",
                                    "Address":"100 Test Street",
                                    "Sex":"M"
                                },{
                                    "Id":2,
                                    "Name":"Kiichi",
                                    "Age":null,
                                    "Email":"anothertest@test.com",
                                    "Is":true,
                                    "StartDate":"2002-01-01T00:00:01",
                                    "State":"NY",
                                    "City":"Test City",
                                    "Address":"200 Test Street",
                                    "Sex":"M"
                                },{
                                    "Id":3,
                                    "Name":"Justin",
                                    "Age":null,
                                    "Email":"testing123@test.com",
                                    "Is":false,
                                    "StartDate":"2018-01-01T00:00:01",
                                    "State":"NY",
                                    "City":"Another Test City",
                                    "Address":"100 Test Street",
                                    "Sex":"M"
                                },{
                                    "Id":4,
                                    "Name":"Korey",
                                    "Age":null,
                                    "Email":"information@test.com",
                                    "Is":false,
                                    "StartDate":null,
                                    "State":"NY",
                                    "City":"Another Test City",
                                    "Address":"150 Test Street",
                                    "Sex":"M"
                                },{
                                    "Id":5,
                                    "Name":"James",
                                    "Age":null,
                                    "Email":"testinformation@test.com",
                                    "Is":false,
                                    "StartDate":null,
                                    "State":"NJ",
                                    "City":"Cityopolis",
                                    "Address":"100 Test Street",
                                    "Sex":"M"
                                }
                            ],
                        callbacks:{},
                        options:{
                            "Id":{
                                alias:"UserID",
                                pk:true,
                                put:false,
                                visible:false
                            },
                            "Name":{
                                alias:"Involved Person"
                            },
                            "Age":{
                                alias:"Incident Age",
                                type:Number,
                            },
                            "Is":{
                            },
                            "StartDate":{
                                externalInput:"#start-date",
                                visible:false
                            },
                            "State":{
                                externalInput:"#state-input",
                                visible:false
                            },
                            "City":{
                                externalInput:"#city-input",
                                visible:false
                            },
                            "Address":{
                                externalInput:"#address-input",
                                visible:false
                            },
                            "Sex":{
                                externalInput:"#sex-input",
                                visible:false
                            }
                        },
                        tableOptions:{
                            put:true,
                            post:true,
                            delete:true
                        },
                        typeSort:{
                            "String":(a,b)=>{
                                return a.localeCompare(b);
                            },
                            "Number":(a,b)=>{
                                a=a==null?-Infinity:a;
                                b=b==null?-Infinity:b;
                                let result = parseFloat(a)-parseFloat(b);
                                if(isNaN(result)){
                                    return 0;
                                }
                                else{
                                    result=result==-Infinity?-1:result;
                                    result=result==Infinity?1:result;
                                    return result;
                                }
                            },
                            "Date":(a,b)=>{
                                return a-b;
                            },
                            "Boolean":(a,b)=>{
                                return a-b;
                            }
                        },
                        theme:{
                            bg:"light",
                            border:"light",
                            text:"dark"
                        }
                    },
                    defaults:{
                        data:[],
                        callbacks:{
                            put:(updated)=> console.log(updated),
                            post:(created)=> console.log(created),
                            delete:(deleted)=> console.log(deleted),
                            select:(selected)=> console.log(selected),
                            success:(success)=> console.log(success),
                            fail:(failed)=> console.log(failed),
                            valid:(valid)=> console.log(valid),
                            invalid:(invalid)=> console.log(invalid)
                        },
                        options:{
                            alias:null,
                            type:String,
                            autotype:(value)=>{return value.constructor},
                            visible:true,
                            put:true,
                            pk:false,
                            externalInput:false,
                            externalChange:false,
                            customValidation:false,
                            sort:null,
                            callbacks:{
                                click:(data)=>console.log('clicked',data),
                                dblclick:(data)=>console.log('double clicked',data),
                                tplclick:(data)=>console.log('triple clicked',data),
                                hover:(data)=>console.log('hover',data),
                                hold:(data)=>console.log('hold',data),
                                drag:(data)=>console.log('drag',data)
                            },
                            tag:false,
                            slot:false
                        },
                        rowOptions:{
                            callbacks:{
                                click:(data)=>console.log('clicked',data),
                                dblclick:(data)=>console.log('double clicked',data),
                                tplclick:(data)=>console.log('triple clicked',data),
                                hover:(data)=>console.log('hover',data),
                                hold:(data)=>console.log('hold',data),
                                drag:(data)=>console.log('drag',data)
                            }
                        },
                        tableOptions:{
                            put:true,
                            delete:true,
                            post:true,
                            pagination:true,
                            footer:true,
                            externalPost:false,
                            callbacks:{
                                click:(data)=>console.log('clicked',data),
                                dblclick:(data)=>console.log('double clicked',data),
                                tplclick:(data)=>console.log('triple clicked',data),
                                hover:(data)=>console.log('hover',data),
                                hold:(data)=>console.log('hold',data),
                                drag:(data)=>console.log('drag',data)
                            }
                        },
                        typeSort:{
                            "String":(a,b)=>{
                                return a.localeCompare(b);
                            },
                            "Number":(a,b)=>{
                                a=a==null?-Infinity:a;
                                b=b==null?-Infinity:b;
                                let result = parseFloat(a)-parseFloat(b);
                                if(isNaN(result)){
                                    return 0;
                                }
                                else{
                                    result=result==-Infinity?-1:result;
                                    result=result==Infinity?1:result;
                                    return result;
                                }
                            },
                            "Date":(a,b)=>{
                                return a-b;
                            },
                            "Boolean":(a,b)=>{
                                return a-b;
                            }
                        },
                        theme:{
                            bg:"light",
                            border:"light",
                            text:"dark"
                        }
                    },
                    windowkeyup:null,
                    windowkeydown:null,
                    onBeforeMount(props,state){
                        this.bind(props,state);
                        window.addEventListener("contextmenu",this.windowContextMenuListener)
                        window.addEventListener("mouseup",this.windowMouseUpListener);
                        window.addEventListener("mousedown",this.windowMouseDownListener);
                    },
                    onBeforeUpdate(props,state){
                        if(this.state.rebind){
                            this.state.rebind=false;
                            this.unbind();
                            this.bind(props,state);
                        }
                        if(this.getSelected().length==0){
                            this.state.datakeys.forEach((key)=>{
                                let externalInput = this.state.options[key].externalInput;
                                if(externalInput){
                                    let el = document.querySelector(externalInput);
                                    if(el){
                                        let type= this.state.options[key].type;
                                        let setter = this.getInputSetMethod(type);
                                        setter(el,this.state.external[key]);
                                    }
                                    else{
                                        console.info("No such element named: "+externalInput)
                                    }
                                }
                            });
                        }
                    },
                    onBeforeUnmount(){
                        this.unbind();
                        window.removeEventListener("contextmenu",this.windowContextMenuListener)
                        window.removeEventListener("mouseup",this.windowMouseUpListener);
                        window.removeEventListener("mousedown",this.windowMouseDownListener);
                    },
                    bind(props,state){
                        "rebind" in props ? props.rebind(()=>{ 
                            this.state.rebind=true;
                        }) : 0 
                        this.state.pagination = {
                            show:10,
                            page:1,
                            start:0,
                            end:10,
                            max:1,
                        };
                        this.state.selected={};
                        this.state.selectedcnt=0;
                        this.state.sort={};
                        this.state.options = {};
                        this.state.tableOptions = {};
                        this.state.theme = {};
                        
                        if(props.debugMode==true){
                            this.debugMode=props.debugMode;
                            console.log(this," - debug mode on (widget-grid)");
                            if(props.debug){
                                this.debug=props.debug;
                            }
                        }
                        
                        let configuration = this.debugMode ? this.debug : props;
                        this.windowkeyup = (e)=>this.controlModifier(e);
                        window.addEventListener("keyup",this.windowkeyup);
                        this.windowkeydown = (e)=>this.controlModifier(e);
                        window.addEventListener("keydown",this.windowkeydown);
                        
                        // set underlying table data
                        this.state.data = configuration.data || this.debug.data;
        
                        // set initial data keys                
                        this.state.datakeys = this.state.data.length > 0 ? Object.keys(this.state.data[0]) : Object.keys(configuration.options) ;
        
                        // set table operation callbacks - functions cannot use assign
                        let callbacks = Object.assign({},this.defaults.callbacks);
                        Object.keys(callbacks).forEach((callback)=>{
                            callbacks[callback] = configuration.callbacks && configuration.callbacks[callback] ? configuration.callbacks[callback] : callbacks[callback] ;
                        });
                        this.state.callbacks=callbacks;
        
                        //set table gesture callbacks
                        let tableCallbacks = Object.assign({},this.defaults.tableOptions.callbacks);
                        Object.keys(tableCallbacks).forEach((tableCallbackKey)=>{
                            tableCallbacks[tableCallbackKey] = configuration.tableOptions && configuration.tableOptions.callbacks &&
                                                                tableCallbackKey in configuration.tableOptions &&
                                                                configuration.tableOptions[tableCallbackKey].constructor == Function
                                                                ? configuration.tableOptions[tableCallbackKey] : tableCallbacks[tableCallbackKey];
                        })
                        this.state.tableOptions.callbacks = tableCallbacks;
        
                        //set row gesture callbacks
                        let rowCallbacks = Object.assign({},this.defaults.rowOptions.callbacks);
                        Object.keys(rowCallbacks).forEach((rowCallbackKey)=>{
                            rowCallbacks[rowCallbackKey] =  configuration.rowOptions && configuration.rowOptions.callbacks && 
                                                            rowCallbackKey in configuration.rowOptions && 
                                                            configuration.rowOptions[rowCallbackKey].constructor == Function  
                                                            ? configuration.rowOptions[rowCallbackKey] : rowCallbacks[rowCallbackKey];
                        });
                        this.state.rowOptions.callbacks = rowCallbacks;
        
                        // set table operation callbacks - with intuitive prop values
                        this.state.callbacks["select"] = configuration.onselect ? configuration.onselect : this.state.callbacks["select"];
                        this.state.callbacks["success"] = configuration.onsuccess ? configuration.onsuccess : this.state.callbacks["success"];
                        this.state.callbacks["failure"] = configuration.onfailure ? configuration.onfailure : this.state.callbacks["failure"];
                        this.state.callbacks["valid"] = configuration.onvalid ? configuration.onvalid : this.state.callbacks["valid"];
                        this.state.callbacks["invalid"] = configuration.oninvalid ? configuration.oninvalid : this.state.callbacks["invalid"];
        
                        //callback data will have enough information to determine put,post,delete
                        this.state.callbacks["put"] = configuration.onchange ? configuration.onchange  : this.state.callbacks["put"];
                        this.state.callbacks["post"] = configuration.onchange ? configuration.onchange : this.state.callbacks["post"];
                        this.state.callbacks["delete"] = configuration.onchange ? configuration.onchange : this.state.callbacks["delete"];
        
                        // set column options (autotype, typeoverride, visible, insert, update, delete, pk)
                        /* setting column options requires iterating through data's key, determinine generic autotype and overriding with users entered overrides via props */
                        this.state.datakeys.forEach((key)=>{
                            let columnOptions=Object.assign({},this.defaults.options);
                            Object.keys(columnOptions).forEach((optionname)=>{
                                columnOptions[optionname] = configuration.options[key] && optionname in configuration.options[key] ? configuration.options[key][optionname] : columnOptions[optionname];
                            });
                            
                            //set column gesture callbacks
                            let colCallbacks = Object.assign({},this.defaults.options.callbacks);
                            Object.keys(colCallbacks).forEach((colCallbackKey)=>{
                                colCallbacks[colCallbackKey] = configuration.options[key] && configuration.options[key]["callbacks"] &&
                                                                colCallbackKey in configuration.options[key]["callbacks"] &&
                                                                configuration.options[key]["callbacks"][colCallbackKey].constructor == Function 
                                                                ? configuration.options[key]["callbacks"][colCallbackKey] : colCallbacks[colCallbackKey];
                            });
                            columnOptions["callbacks"] = colCallbacks;
        
                            if(!(key in configuration.options) || !configuration.options[key].type ){
                                let i=0; //search until first auto-type is found for col not null
                                let autotype=null;
                                while(autotype==null && i<this.state.data.length){
                                    if(this.state.data[i][key]!=null){
                                        columnOptions.autotype=columnOptions.autotype(this.state.data[i][key]);
                                        autotype=true;
                                    }
                                    i++;
                                }
                                columnOptions.type=columnOptions.autotype;
                            }
                            this.state.options[key] = columnOptions; // set column options
                            //mount external input change events
                            let externalInput=this.state.options[key].externalInput;
                            if(externalInput){
                                setTimeout(()=>{
                                    let el = document.querySelector(externalInput);
                                    if(el){
                                        this.state.listeners[key]={};
                                        this.state.listeners[key]["change"]=(e)=>{ 
                                            let validations={
                                                required: el.getAttribute("required") ? el.getAttribute("required") : false,
                                                minlength: el.getAttribute("minlength") ? el.getAttribute("minlength") : false,
                                                maxlength: el.getAttribute("maxlength") ? el.getAttribute("maxlength") : false,
                                                min: el.getAttribute("min") ? el.getAttribute("min") : false,
                                                max: el.getAttribute("max") ? el.getAttribute("max") : false,
                                                type: el.getAttribute("type") ? el.getAttribute("type") : false,
                                                pattern: el.getAttribute("pattern") ? el.getAttribute("pattern") : false,
                                                customValidation: this.state.options[key].customValidation ?  this.state.options[key].customValidation : false,
                                            }
                                            
                                            el.setCustomValidity("");
                                            if(el.checkValidity()){
                                                let customValidity = validations.customValidation ? 
                                                        validations.customValidation.constructor === Function ? 
                                                            validations.customValidation(el.value) : 
                                                            ( validations.customValidation.constructor === Object ? validations.customValidation.test(el.value) : null )
                                                        : null ;  
                                                if(customValidity==true || customValidity==null){
                                                    this.state.callbacks.valid({
                                                        pkcols:this.state.pkcols,
                                                        type:"valid",
                                                        input:el,
                                                        change:e,
                                                        nativeValidity:true,
                                                        customValidity:true,
                                                        validations:validations,
                                                        new:el.value
                                                    })
                                                    this.applyPutExternal(e,key)
                                                }
                                                else{
                                                    let message = "message" in validations.customValidation ? validations.customValidation.message : "Invalid Field.";
                                                    el.setCustomValidity(message);
                                                    this.state.callbacks.invalid({
                                                        pkcols:this.state.pkcols,
                                                        type:"invalid",
                                                        input:el,
                                                        change:e,
                                                        nativeValidity:true,
                                                        customValidity:false,
                                                        validations:validations,
                                                        new:el.value
                                                    })
                                                }
                                            }
                                            else{
                                                this.state.callbacks.invalid({
                                                    pkcols:this.state.pkcols,
                                                    type:"invalid",
                                                    input:el,
                                                    change:e,
                                                    nativeValidity:false,
                                                    customValidity:false,
                                                    validations:validations,
                                                    new:el.value
                                                })
                                            }
                                        };
                                        el.addEventListener("change",this.state.listeners[key]["change"]);
        
                                        let type = this.state.options[key].type;
                                        let getter = this.getInputGetMethod(type);
                                        this.state.external[key] = getter({target:el});
                                    }
                                    else{
                                        console.info("No such element named: "+externalInput)
                                    }
                                },45);
                            }
                        });
        
                        // set table options (post,delete)
                        this.state.tableOptions = Object.assign({},this.defaults.tableOptions);
                        this.state.tableOptions = configuration.tableOptions ? Object.assign(this.state.tableOptions,configuration.tableOptions):this.state.tableOptions; 
                        let externalPostBtn = document.querySelector(this.state.tableOptions.externalPost)
                        externalPostBtn ? externalPostBtn.addEventListener("click",this.applyPost) : 0 ;
        
                        // set typeSort options
                        this.state.typeSort = Object.assign({},this.defaults.typeSort);
                        this.state.typeSort = configuration.typeSort ? Object.assign(this.state.typeSort,configuration.typeSort) : this.state.typeSort;
                        
                        //set theme options
                        this.state.theme = Object.assign({},this.defaults.theme);
                        this.state.theme = configuration.theme ? Object.assign(this.state.theme,configuration.theme): this.state.theme;
        
                        //set pkcols
                        this.state.pkcols = this.getPKID();
                        this.state.pkidstr = this.state.pkcols.join("::-::");
                    },
                    onMounted(props,state){
                        let configuration = this.debugMode ? this.debug : props;
                        if(configuration.path && this.state.firstRun){
                            setTimeout(()=>{
                                this.editState(configuration.path);
                            },50);
                        }
                        if(this.state.firstRun){
                            this.state.firstRun=false;
                        }
                    },
                    unbind(){
                        this.state.datakeys.forEach((key)=>{
                            let externalInput = this.state.options[key].externalInput;
                            if(externalInput){
                                let el = document.querySelector(externalInput);
                                if(el){
                                    Object.keys(this.state.listeners[key]).forEach((listenerKey)=>{
                                        el.removeEventListener(listenerKey,this.state.listeners[key][listenerKey]);
                                    });
                                    let type= this.state.options[key].type;
                                    let setter = this.getInputSetMethod(type);
                                    setter(el,this.state.external[key]);
                                }
                                else{
                                    console.info("No such element named: "+externalInput)
                                }
                            }
                        });
        
                        let externalPostBtn = document.querySelector(this.state.tableOptions.externalPost)
                        externalPostBtn ? externalPostBtn.removeEventListener("click",this.applyPost) : 0 ;
                        
                        if(this.windowkeyup){
                            window.removeEventListener("keyup",this.windowkeyup);
                            window.removeEventListener("keydown",this.windowkeydown);
                        }
                        else{
                            console.log(this.windowkeyup,"keyevents wiped prior to app mount");
                        }
                    },
                    getPKID(){
                        let PKID = [];
                        this.state.datakeys.forEach((key)=>{
                            this.state.options[key].pk ? PKID.push(key) : 0 ;
                        })
                        return PKID;
                    },
                    getInputType(type){
                        if(type===String){
                            return 'text';
                        }
                        else if(type===Number){
                            return 'number'; 
                        }
                        else if(type===Date){
                            return 'datetime';
                        }
                        else if(type===Boolean){
                            return 'checkbox';
                        }
                        else if(type===Image){
                            return 'file'
                        }
                    },
                    getInputGetMethod(type){
                        if(type===String){
                            return (e)=>{
                                return e.target.value; 
                            };
                        }
                        else if(type===Number){
                            return (e)=>{
                                return e.target.value; 
                            };
                        }
                        else if(type===Date){
                            return (e)=>{
                                return e.target.value; 
                            };
                        }
                        else if(type===Boolean){
                            return (e)=>{
                                return e.target.checked; 
                            };
                        }
                    },
                    getInputSetMethod(type){
                        if(type===String){
                            return (el,val)=>{
                                el.value=val; 
                            };
                        }
                        else if(type===Number){
                            return (el,val)=>{
                                el.value=val; 
                            };
                        }
                        else if(type===Date){
                            return (el,val)=>{
                                el.value=val; 
                            };
                        }
                        else if(type===Boolean){
                            return (el,val)=>{
                                el.checked=val; 
                            };
                        }
                    },
                    getRow(rowkeyobj){
                        let keys = Object.keys(rowkeyobj);
                        let foundRow;
                        this.state.data.forEach( (row,index)=>{
                            let match = true;
                            keys.forEach((key)=>{
                                if(row[key]!=rowkeyobj[key]){
                                    match=false;
                                    return;
                                }
                            });
                            if(match == true ){
                                foundRow=row;
                                return;
                            }
                        });
                        return foundRow;
                    },
                    getRowKey(row){
                        return this.state.pkcols.map(( pkid )=>{ return pkid+"::_::"+row[pkid] }).join("::-::");
                    },
                    getCellKey(index,key){
                        return index+":==:"+key;
                    },
                    parseColType(str,col){
                        let type=this.state.options[col].type;
                        if(type===Number){
                            return str.type===String  ? parseFloat(str) : str;
                        }
                        else if(type===String){
                            return str.type===String ? str : str + "";
                        }
                        else if(type===Date){
                            return str;
                        }
                        else if(type===Boolean){
                            return str=="true" || str == 1 ? true : false
                        }
                    },
                    parseRowKey(rowkey){
                        let rowkeyobj={};
                        rowkey.split("::-::").forEach((key)=>{
                            let keypair = key.split("::_::");
                            rowkeyobj[keypair[0]]=this.parseColType(keypair[1],keypair[0]);
                        });
                        return rowkeyobj;
                    },
                    setPage(e){
                        if(e.target.value<1){
                            this.state.pagination.page=1;
                            this.state.pagination.start = (this.state.pagination.show*0);
                            this.state.pagination.end = (this.state.pagination.show*1);
                            this.state.pagination.max = Math.ceil(this.state.data.length/this.state.pagination.show);
                        }
                        else{
                            this.state.pagination.page = parseInt(e.target.value);
                            this.state.pagination.start = (this.state.pagination.show*(this.state.pagination.page))-this.state.pagination.show;
                            this.state.pagination.end = (this.state.pagination.show*this.state.pagination.page)+1;
                            this.state.pagination.max = Math.ceil(this.state.data.length/this.state.pagination.show);
                        }
                        this.update();
                    },
                    setPageCount(e){
                        this.state.pagination.show = parseInt(e.target.value);
                        let mockevent = {target:{value:"1"}};
                        this.setPage(mockevent);
                    },
                    getSelected(){
                        return Object.keys(this.state.selected);
                    },
                    rowMenu(e){
                        if(this.state.tableOptions.delete){
                            if(e.target.getAttribute("style")==null){
                                e.target.setAttribute('style','min-width:100px');
                                this.state.mode="modify";
                            }
                            else{
                                let counters = document.getElementsByClassName("cell-counter");
                                for(var i=0;i<counters.length;i++){
                                    counters[0].removeAttribute("style");
                                }
                                this.state.mode="";
                            }
                            this.update();
                        }
                    },
                    toggleAll(e){
                        let oldSelected = Object.keys(this.state.selected).map((rowKey)=>{ return this.getRow(this.parseRowKey(rowKey))});
                        if(this.state.all){
                            this.state.all=false;
                            this.state.selected={};
                            this.state.selectedcnt=0;
                        }
                        else{
                            for(var i=0;i<this.state.data.length;i++){
                                let rowpairkey = this.getRowKey(this.state.data[i]);
                                let rowkeyobj = this.parseRowKey(rowpairkey);
                                this.state.selected[rowpairkey]=rowkeyobj;
                            }
                            this.state.all=true;
                            this.state.selectedcnt=this.state.data.length;
                        }
                        this.update();
                        let newSelected = Object.keys(this.state.selected).map((rowKey)=>{ return this.getRow(this.parseRowKey(rowKey))});
                        this.state.callbacks.select({pkcols:this.state.pkcols,type:"select",old:oldSelected,new:newSelected});
                    },
                    clearAll(){
                        let oldSelected = Object.keys(this.state.selected).map((rowKey)=>{ return this.getRow(this.parseRowKey(rowKey))});
                        this.state.all=false;
                        this.state.selected={};
                        this.state.selectedcnt=0;
                        this.update();
                        let newSelected = [];
                        if(oldSelected.length>0){
                            this.state.callbacks.select({pkcols:this.state.pkcols,type:"select",old:oldSelected,new:newSelected});
                        }
                    },
                    toggleRow(e){
                        let rowpairkey= e.target.getAttribute("data-selectkey");
                        let rowkeyobj=this.parseRowKey(rowpairkey);
                        let oldSelected=Object.keys(this.state.selected).map((rowKey)=>{ return this.getRow(this.parseRowKey(rowKey))});
                        if(rowpairkey in this.state.selected){
                            //remove item
                            this.state.all=false;
                            delete this.state.selected[rowpairkey];
                        }
                        else{
                            //add item (check if all selected)
                            this.state.selected[rowpairkey]=rowkeyobj;
                            this.isAllSelected();
                        }
                        this.state.selectedcnt=Object.keys(this.state.selected).length;
                        this.update();
                        this.setExternalInputs();
                        let newSelected=Object.keys(this.state.selected).map((rowKey)=>{ return this.getRow(this.parseRowKey(rowKey))});
                        this.state.callbacks.select({pkcols:this.state.pkcols,type:"select",old:oldSelected,new:newSelected});
                        
                    },
                    isAllSelected(){
                        if(Object.keys(this.state.selected).length==this.state.data.length){
                            this.state.all=true;
                        }
                    },
                    postMenu(e){
                        this.state.mode = this.state.mode=="post"?"":"post";
                        this.update();
                    },
                    isVisible(rowIndex){
                        return (
                            rowIndex+1 > this.state.pagination.start &&
                            rowIndex+1 < this.state.pagination.end
                        );
                    },
                    control(e){
                        if(e.key == "Tab" || e.key =="ArrowDown" || e.key == "Enter"){
                            e.preventDefault();
                        }
                        let datakeys=this.state.datakeys.filter((key)=>{
                            return this.state.options[key].visible
                        });
                        let rowpathindex=this.state.path.length-2;
                        let keypathindex=this.state.path.length-1;
                        let curkey= this.state.path[keypathindex];
                        let curkeyindex;
                        let rowindex= this.state.path[rowpathindex];
                        let curpath = JSON.parse(JSON.stringify(this.state.path));
                        datakeys.forEach((key,index)=>{
                            if(key==curkey){
                                curkeyindex=index;
                            }
                        })
                        if(curkeyindex===undefined || curkeyindex==null){
                            rowindex < this.state.data.length-1  ? curpath[rowpathindex]++ : 0
                            curkeyindex=0;
                        }
                        if(e.key == "Tab"){
                            this.applyPut(e,true);
                            if(this.state.shiftmodifier){
                                if(curkeyindex==0){
                                    rowindex == 0  ? curpath[rowpathindex]=this.state.data.length-1 : curpath[rowpathindex]-- ;
                                }
                                else{
                                    curkeyindex--
                                }
                            }
                            else{   
                                if(curkeyindex<datakeys.length-1){
                                    curkeyindex++
                                }
                                else{
                                    curkeyindex=0;
                                    rowindex < this.state.data.length-1  ? curpath[rowpathindex]++ : 0
                                } 
                            }
                            curpath[keypathindex]=datakeys[curkeyindex];
                            this.editState(curpath);
                        }
                        if(e.key == "Enter" || e.key == "ArrowDown") {
                            this.applyPut(e,true);
                            rowindex < this.state.data.length-1  ? curpath[rowpathindex]++ : 0
                            this.editState(curpath)
                        }
                        if(e.key == "ArrowUp"){
                            this.applyPut(e,true);
                            rowindex == 0 ? curpath[rowpathindex] = this.state.data.length-1 : curpath[rowpathindex]--;
                            this.editState(curpath);
                        }
                        if(e.key == "Escape"){
                            this.editState([]);
                        }
                    },
                    controlModifier(e){
                        if(e.key=="Shift"){
                            if(e.type=="keydown"){
                                this.state.shiftmodifier=true;
                            }
                            else if(e.type=="keyup"){
                                this.state.shiftmodifier=false;
                            }
                        }
                    },
                    leavetable(path){
                        let oldvalue = JSON.stringify(path);
                        setTimeout(()=>{
                            oldvalue == this.state.pathstr ? this.editState([]) : false ;
                        },200)
                    },
                    editState(path){
                        let oldSelected = Object.keys(this.state.selected).map((rowKey)=>{ return this.getRow(this.parseRowKey(rowKey))}); 
                        this.state.prevPath=this.state.path;
                        let exists = this.state.pathstr != JSON.stringify(path) && JSON.stringify(path) !="[]";
                        this.state.path=path;
                        this.state.pathstr=JSON.stringify(path);
                        // ------------------ UnSelect all but viewed row
                        if(path.length>1){
                            this.state.all=false;
                            let selectionKey=this.getRowKey(this.state.data[path[0]]);
                            this.state.selected={}; 
                            this.state.selected[selectionKey]=this.parseRowKey(selectionKey);
                            this.state.selectedcnt=1;
                        }
                        // ------------------ Check if all selected
                        this.isAllSelected();
                        this.update();
                        if(exists){
                            let id =  '#input-control-'+path[path.length-2]+'-'+path[path.length-1]+'-'+this.state.pkidstr;
                            if(path.length>0 && this.state.tableOptions.put==true){
                                let type = this.state.options[path[1]].type;
                                let setter = this.getInputSetMethod(type);
                                let input = this.$(id);
                                let value = this.state.data[path[0]][path[1]];
                                setter(input,value);
                                if(input){
                                    input.focus();
                                    input.select();
                                }
                            }
                            this.setExternalInputs();
                        }
                        let newSelected = Object.keys(this.state.selected).map((rowKey)=>{ return this.getRow(this.parseRowKey(rowKey))});
                        if(JSON.stringify(oldSelected)!=JSON.stringify(newSelected)){
                            this.state.callbacks.select({pkcols:this.state.pkcols,type:"select",old:oldSelected,new:newSelected},this);
                        }
                    },
                    setExternalInputs(){
                        this.state.datakeys.forEach((key)=>{
                            if(this.state.options[key].externalInput){
                                let firstRow;
                                let matching=true;
                                let selectedkeys=Object.keys(this.state.selected);
                                if(selectedkeys.length>0){
                                    selectedkeys.forEach((selectedkey,index)=>{
                                        if(index==0){
                                            firstRow=this.getRow(this.state.selected[selectedkey]);
                                        }
                                        else{
                                            let nextrow=this.getRow(this.state.selected[selectedkey]);
                                            if(nextrow[key]!=firstRow[key]){
                                                matching=false;
                                                return;
                                            }
                                        }
                                    });
                                    if(matching){
                                        this.setExternalInput(firstRow,key);
                                    }
                                }
                                else{
                                    if(this.getSelected().length==0){
                                        this.state.datakeys.forEach((key)=>{
                                            let externalInput = this.state.options[key].externalInput;
                                            if(externalInput){
                                                let el = document.querySelector(externalInput);
                                                if(el){
                                                    let type= this.state.options[key].type;
                                                    let setter = this.getInputSetMethod(type);
                                                    setter(el,this.state.external[key])
                                                }
                                                else{
                                                    console.info("No such element named: "+externalInput)
                                                }
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    },
                    setExternalInput(row,key){
                        let externalInput = this.state.options[key].externalInput;
                        if(externalInput){
                            let type = this.state.options[key].type;
                            let setter = this.getInputSetMethod(type);
                            let el = document.querySelector(externalInput);
                            if(el){
                                let value = row[key];
                                setter(el,value);
                                el.removeEventListener("change",this.state.listeners[key]["change"]);
                                this.state.options[key].externalChange==true ? el.dispatchEvent(new Event("change")) : 0 ;
                                el.addEventListener("change",this.state.listeners[key]["change"]);
                            }
                            else{
                                console.info("No such element named: "+externalInput)
                            }
                        }
                    },
                    applyPutExternal(e,key=null){
                        let selectedKeys = Object.keys(this.state.selected);
                        if( selectedKeys.length>0){
                            let oldRows=[];
                            let newRows=[];
                            let editRows=[];
                            let type = this.state.options[key].type;
                            let getter = this.getInputGetMethod(type);
                            let setValue = getter(e);
        
                            selectedKeys.forEach((selectedkey)=>{
                                let editRow=this.getRow(this.state.selected[selectedkey]);
                                editRows.push(editRow);
                                let oldRow=JSON.parse(JSON.stringify(editRow));
                                oldRows.push(oldRow);
                                let newRow=JSON.parse(JSON.stringify(oldRow));
                                newRow[key]=setValue;
                                newRows.push(newRow);
                            });
                            let confirmPut = (confirm)=>{
                                if(confirm){
                                    editRows.forEach((row)=>{
                                        row[key]=setValue;
                                        
                                        let rowKey = this.getRowKey(row);
                                        this.state.operations.put[rowKey] = {
                                            status:"success"
                                        };
                                    });
                                    this.update();
        
                                    editRows.forEach((row)=>{
                                        let rowKey = this.getRowKey(row);
                                        delete this.state.operations.put[rowKey];
                                    })
                                    return true;
                                }
                                editrows.forEach((row)=>{
                                    let rowKey = this.getRowKey(row);
                                    this.state.operations.put[rowKey] = {
                                        status:"failure"
                                    };
                                })
                                this.update();
                                editrows.forEach((row)=>{
                                    let rowKey = this.getRowKey(row);
                                    delete this.state.operations.put[rowKey];
                                })
                                return false;         
                            }
                            editRows.forEach((row)=>{
                                let rowKey=this.getRowKey(row);
                                this.state.operations.put[rowKey] = {
                                    status:"processing",
                                };
                            });
                            
                            this.update();
                            this.state.callbacks.put({
                                pkcols: this.state.pkcols,
                                type: "put",
                                old: oldRows,
                                new: newRows,
                                confirm: ( this.debugMode ? setTimeout(()=>{ confirmPut( true ) },50) : confirmPut )
                            });
                        }
                        else{
                            this.editPostExternal(e,key);
                        }
                    },
                    applyPut(e){
                        let path = this.state.path;
                        if(path.length>0){
                            e.target.setCustomValidity("");
                            let validations={
                                customValidation: this.state.options[path[1]].customValidation ?  this.state.options[path[1]].customValidation : false,
                            }
                            let customValidity = validations.customValidation ? 
                                validations.customValidation.constructor === Function ? 
                                    validations.customValidation(e.target.value) : 
                                    ( validations.customValidation.constructor === Object ? validations.customValidation.test(e.target.value) : null )
                                : null ;
                            if(customValidity==false){
                                let message = "message" in validations.customValidation ? validations.customValidation.message : "Invalid Field.";
                                e.target.setCustomValidity(message);
                                this.state.callbacks.invalid({
                                    pkcols:this.state.pkcols,
                                    type:"invalid",
                                    input:e.target,
                                    change:e,
                                    nativeValidity:true,
                                    customValidity:false,
                                    validations:validations,
                                    new:e.target.value
                                })
                                return;
                            }
                            else{
                                this.state.callbacks.valid({
                                    pkcols:this.state.pkcols,
                                    type:"valid",
                                    input:e.target,
                                    change:e,
                                    nativeValidity:true,
                                    customValidity:true,
                                    validations:validations,
                                    new:e.target.value
                                })
                            }
                            let type = this.state.options[path[1]].type;
                            let getter = this.getInputGetMethod(type);
                            let old = JSON.parse(JSON.stringify(this.state.data[path[0]]));
                            let setValue = getter(e);
                            let newRow = JSON.parse(JSON.stringify(this.state.data[path[0]]));
                            let rowKey = this.getRowKey(old);
                            newRow[path[1]] = setValue;
                            if( JSON.stringify(old) != JSON.stringify(newRow) ){
                                let confirmPut = (Confirm)=>{
                                    if(Confirm){
                                        
                                        this.state.data[path[0]][path[1]] = setValue;
                                        this.state.operations.put[rowKey] = {
                                            status:"success"
                                        };
                                        this.update();
                                        delete this.state.operations.put[rowKey];
                                        this.state.callbacks.success({pkcols:this.state.pkcols,type:"put",action:"success",old:[old],new:[newRow]})
                                        return true;
                                    }
                                    this.state.operations.put[rowKey] = {
                                        status:"failure"
                                    };
                                    this.update();
                                    delete this.state.operations.put[rowKey]
                                    this.state.callbacks.fail({pkcols:this.state.pkcols,type:"put",action:"fail",old:[old],new:[newRow]})
                                    return false;
                                }
        
                                this.state.operations.put[rowKey] = {
                                    status:"processing",
                                };
                                this.update();
                                this.state.callbacks.put({
                                    pkcols: this.state.pkcols,
                                    type: "put",
                                    action: "processing",
                                    old: [old],
                                    new: [newRow],
                                    confirm: ( this.debugMode ? setTimeout(()=>{ confirmPut( true ) },50) : confirmPut )
                                });
                            }
                        }
                    },
                    editPostExternal(e,key){
                        //save postable content to object to send
                        let type = this.state.options[key].type;
                        let getter = this.getInputGetMethod(type);
                        this.state.new[key] = getter(e);
                    },
                    editPost(e){
                        //save postable content to object to send
                        let key = e.target.getAttribute("data-postkey");
        
                        e.target.setCustomValidity("");
                        let validations={
                            customValidation: this.state.options[key].customValidation ?  this.state.options[key].customValidation : false,
                        }
                        let customValidity = validations.customValidation ? 
                            validations.customValidation.constructor === Function ? 
                                validations.customValidation(e.target.value) : 
                                ( validations.customValidation.constructor === Object ? validations.customValidation.test(e.target.value) : null )
                            : null ;
                        if(customValidity==false){
                            let message = "message" in validations.customValidation ? validations.customValidation.message : "Invalid Field.";
                            e.target.setCustomValidity(message);
                            this.state.callbacks.invalid({
                                pkcols:this.state.pkcols,
                                type:"invalid",
                                input:e.target,
                                change:e,
                                nativeValidity:true,
                                customValidity:false,
                                validations:validations,
                                new:e.target.value
                            })
                            return;
                        }
                        else{
                            this.state.callbacks.valid({
                                pkcols:this.state.pkcols,
                                type:"valid",
                                input:e.target,
                                change:e,
                                nativeValidity:true,
                                customValidity:true,
                                validations:validations,
                                new:e.target.value
                            })
                        }
                        let type = this.state.options[key].type;
                        let getter = this.getInputGetMethod(type);
                        this.state.new[key] = getter(e);
                    },
                    applyPost(e){
                        //send object to post callback
                        let postback = JSON.parse(JSON.stringify(this.state.new));
                        let selected = this.getSelected();
                        if(selected.length==1){
                            Object.assign(postback,this.getRow(this.parseRowKey(selected[0])));
                        }
        
                        let postbackPKID = this.state.pkcols;
                        let postbackPKIDObj = {};
                        postbackPKID.forEach((pkid)=>{
                            postbackPKIDObj[pkid]=null;
                        });
                        let prevMode = this.state.mode;
        
                        let confirmPost = (PKIDMergeObj)=>{
                            if(PKIDMergeObj){
                                let confirmedRow = Object.assign(postback,PKIDMergeObj)
                                this.state.data.push(confirmedRow);
                                this.state.datakeys.forEach((key)=>{
                                    let input = this.$('#new-insert-'+key);
                                    input !== undefined ? input.value='':0;
        
                                })
                                this.state.new={};
                                let rowKey = this.getRowKey(confirmedRow);
                                this.$('#widget-grid-new').classList.remove('action-processing');
                                this.state.operations.post[rowKey]={
                                    status:'success'
                                };
                                if(prevMode=='post'){
                                    this.state.mode=prevMode;
                                }
                                else{
                                    this.state.mode='';
                                }
                                this.update();
                                this.toggleRow({ target:this.$("input[data-selectkey="+rowKey+"]") });
                                delete this.state.operations.post[this.getRowKey(confirmedRow)];
                                this.state.callbacks.success({pkcols:postbackPKID,type:"post",action:"success",old:[],new:[confirmedRow]}) 
                                return true;
                            }
                            //Mark new record as a failure
                            this.state.operations.post[this.getRowKey(confirmedRow)]={
                                status:'failure'
                            };
                            this.$('#widget-grid-new').classList.remove('action-processing');
                            this.$('#widget-grid-new').classList.add('action-failure');
                            this.state.callbacks.fail({pkcols:postbackPKID,type:"post",action:"fail",old:[],new:[PKIDMergeObj]})
                            return false;
                        }
        
                        if(this.debugMode){
                            postbackPKID.forEach((pkcol)=>{
                                postbackPKIDObj[pkcol] = this.uuidv4();
                            });
                        } 
        
                        let keysToReset = Object.keys(this.state.external);
                        keysToReset.forEach((key)=>{
                            let externalInput = this.state.options[key].externalInput;
                            if(externalInput){
                                let el = document.querySelector(externalInput);
                                if(el){
                                    el.removeEventListener("change",this.applyPutExternal);
                                    let type= this.state.options[key].type;
                                    let setter = this.getInputSetMethod(type);
                                    setter(el,this.state.external[key]);
                                }
                                else{
                                    console.info("No such element named: "+externalInput)
                                }
                            }
                        });
        
                        this.state.mode="post";
                        this.update();
                        this.$('#widget-grid-new').classList.remove('action-failure');
                        this.$('#widget-grid-new').classList.remove('action-processing');
                        this.$('#widget-grid-new').classList.add('action-processing');
                        this.state.callbacks.post({
                            pkcols:postbackPKID,
                            type:"post",
                            action: "processing",
                            new:postback,
                            confirmContent:postbackPKIDObj,
                            confirm: ( this.debugMode ? setTimeout(()=>{ confirmPost( postbackPKIDObj ) },50) : confirmPost )
                        });
                    },
                    applyDelete(e){
                        let selectkeys=Object.keys(this.state.selected).map((key)=>this.state.selected[key]);
        
                        e.preventDefault();
                        e.stopPropagation();
        
                        let confirmdelete = (result,callback=(deleted,selectkeys)=>{ console.log("client side delete failed",deleted,selectkeys) })=>{
                            if(result){
                                let deleted=[];
                                for(var i=0;i<this.state.data.length;i++){
                                    let match=false;
                                    selectkeys.forEach((selectkey)=>{
                                        let keymatch=true;
                                        Object.keys(selectkey).forEach((key)=>{
                                            if(this.state.data[i][key]!=selectkey[key]){
                                                keymatch=false;
                                            }
                                        })
                                        if(keymatch){
                                            match=true;
                                        }
                                    });
                                    if(match){
                                        deleted.push(this.state.data[i]);
                                        this.state.data.splice(i,1);
                                        i--;
                                    }
                                }
                                if(deleted.length!=selectkeys.length){
                                    callback(deleted,selectkeys);
                                }
                                this.update();
        
                                this.state.callbacks.success({pkcols:this.state.pkcols,type:"post",action:"success",old:deleted,new:[]})
                                return true;
                            }
                            this.state.callbacks.fail({pkcols:this.state.pkcols,type:"post",action:"fail"})
                            return false;
                        };
        
                        this.state.callbacks.delete({
                            old: selectkeys,
                            type:"delete",
                            action: "processing",
                            confirm: (this.debugMode ? confirmdelete(true) : confirmdelete)  
                        })
                    },
                    rowDataUnavailable(row){
                        let rowKey = this.getRowKey(row);
                        return (    (rowKey in this.state.operations.put && this.state.operations.put[rowKey].status!='success') ||
                                    (rowKey in this.state.operations.post && this.state.operations.post[rowKey].status!='success')
                        );
                    },
                    uuidv4() {
                        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                            return v.toString(16);
                        })
                    },  
                    sort(key){
                        var numsorts = this.calcSortOrder();
                        let oldkey = key in this.state.sort && this.state.sort[key].type ? this.state.sort[key].type :"NONE";
                        if(!this.state.shiftmodifier){
                            this.state.sort={};
                            this.state.sort[key]={
                                type:oldkey,
                                order:0
                            }
                        }
                        if(this.state.sort[key]===undefined){
                            this.state.sort[key]={
                                type:"DESC",
                                order:numsorts.length-1
                            }
                        } 
                        else if(this.state.sort[key].type=="NONE"){
                            this.state.sort[key].type="DESC";
                        }
                        else if(this.state.sort[key].type=="DESC"){
                            this.state.sort[key].type="ASC";
                        }
                        else if(this.state.sort[key].type=="ASC"){
                            delete this.state.sort[key];
                        }
        
                        var finalsortorder=this.calcSortOrder();
                        this.buildSort(finalsortorder);
                        this.update();
                    },
                    calcSortOrder(){
                        var numsorts = Object.keys(this.state.sort);
                        for(var i=0;i<numsorts.length-1;i++){
                            if(this.state.sort[numsorts[i]].order > this.state.sort[numsorts[i+1]].order){
                                let forward = numsorts[i];
                                numsorts=numsorts.splice(i,1,numsorts[i+1]);
                                numsorts[i+1]=forward;
                            }
                        }
                        for(var i=0;i<numsorts.length;i++){
                            this.state.sort[numsorts[i]].order=i;
                        }
                        return numsorts;
                    },
                    buildSort(orderedsorts){
                        var thisref=this;
                        function dimensionalSort(dimensionalsorts, dimensionalindex=0,a,b){
                            if(dimensionalindex<dimensionalsorts.length){
                                let key=dimensionalsorts[dimensionalindex];
                                let sortresult=thisref.state.typeSort[thisref.state.options[key].type.name](a[key],b[key]);
                                sortresult = thisref.state.sort[key].type=="ASC" ? sortresult : -1 * sortresult;
                                dimensionalindex++;
                                return sortresult==0 ? dimensionalSort(dimensionalsorts,dimensionalindex,a,b) : sortresult;
                            }
                            return 0;
                        }
                        this.state.data = this.state.data.sort((a,b)=>{ 
                            return dimensionalSort(orderedsorts,0,a,b);
                        });
                    },
                    visibleCols(){
                        let visibleCount = 0;
                        Object.keys(this.state.options).forEach((key)=>{
                            this.state.options[key].visible ? visibleCount++ : 0 ;
                        })
                        return visibleCount-1;
                    },
                    pointerDefault(type){
                        return this.state.pointer.default[type];
                    },
                    pointerSet(type,key,value){
                        type=="table" ? 
                            this.state.pointer[type] = value :
                            this.state.pointer[type][key] = value;
                    },
                    pointerGet(type,key){
                        if(type=="table"){
                           return "delay" in this.state.pointer[type] ? this.state.pointer[type] : false;     
                        }
                        return key in this.state.pointer[type] ? this.state.pointer[type][key] : false;
                    },
                    windowMouseDownListener(event){
                        this.state.pointer.global.mousedown=true;
                    },
                    windowMouseUpListener(event){
                        if( this.state.pointer.global.mousedown ){
                            this.state.pointer.global.mousedown=false;
                            this.state.pointer.global.mousedownStack.forEach(pointer=>{
                                pointer.mouseup=false;
                                if(this.state.pointer.global.drag){
                                    pointer.callback.drag(pointer.content);
                                }
                            });
                            this.state.pointer.global.mousedownStack=[];
                            this.state.pointer.global.drag=false;
                            this.state.pointer.global.content=null;
                        }
                    },
                    windowContextMenuListener(event){
                        this.state.pointer.cell = {};
                        this.state.pointer.row = {};
                        this.state.pointer.table  = {};
                        this.state.pointer.global = {
                            mousedown:false,
                            mousedownStack:[],
                            content:null
                        }
                    },
                    tieToMouseDownStack(item){
                        this.state.pointer.global.mousedownStack.push(item);
                    },
                    gestureCallbackContents(scopeType,gestureType,event,index,contents){
                        if(scopeType == "cell"){
                            return { 
                                scopeType:scopeType,
                                gestureType:gestureType,
                                event:event,
                                index:index,
                                row:this.state.data[index],
                                column:contents,
                                value:this.state.data[index][contents]
                            } //cell
                        }
                        else if(scopeType == "row"){
                            return {
                                scopeType:scopeType,
                                gestureType:gestureType,
                                event:event,
                                index:index,
                                row:contents
                            } //row/table
                        }
                        else if(scopeType =="table"){
                           return {
                                scopeType:scopeType,
                                gestureType:gestureType,
                                event:event,
                                data:contents
                           } 
                        }
                    
                    },
                    cellTagScope(row,key){
                        let tagCfg = this.state.options[key].tag;
                        let props = Object.assign({},tagCfg.props,{[tagCfg.key]:row[key]});
                        return props;
                    },
                    cellSlotScope(row,key){
                        let tagCfg = this.state.options[key].tag;
                        let props = {
                            [tagCfg.key]:row[key]
                        }
                        return props
                    },
                    cellTagName(key){
                        return this.state.options[key].tag.name;
                    },
                    cellPointerInstance(index,key){
                        let cellKey = this.getCellKey(index,key);
                        let cellPointer = this.pointerGet("cell",cellKey);
                        let cellPointerDefault = this.pointerDefault("cell");
                        if( !cellPointer ){
                            cellPointer=JSON.parse(JSON.stringify(cellPointerDefault));
                            this.pointerSet("cell",cellKey,cellPointer);
                        }
                        return cellPointer;
                    },
                    cellMouseOver(event,index,key){
                        let cellPointer=this.cellPointerInstance(index,key);
                        cellPointer.mouseover=true; 
                        cellPointer.mousedown ? cellPointer.canceldrag = true : 0; //cancel drag operation on self
                        cellPointer.over++;
                        setTimeout(()=>{
                            this.cellHover(event,index,key);
                        },this.pointerDefault("cell").delay.hover);
                    },
                    cellMouseOut(event,index,key){
                        let cellPointer=this.cellPointerInstance(index,key);
                        cellPointer.mouseover = false;
                    },
                    cellHover(event,index,key){
                        let cellPointer=this.cellPointerInstance(index,key);
                        cellPointer.over--;
                        if( cellPointer.mouseover && !this.state.pointer.global.mousedown && cellPointer.over==0 ){
                            this.state.options[key].callbacks.hover(this.gestureCallbackContents("cell","hover",event,index,key));
                        }
                    },
                    cellMouseDown(event,index,key){
                        let cellPointer=this.cellPointerInstance(index,key);
                        cellPointer.mousedown=true;
                        this.tieToMouseDownStack(cellPointer);
                        setTimeout(()=>{
                            this.cellHold(event,index,key);
                        },this.pointerDefault("cell").delay.hold);
                    },
                    cellMouseUp(event,index,key){
                        let cellPointer=this.cellPointerInstance(index,key);
                        cellPointer.mousedown=false;
                    },
                    cellHold(event,index,key){
                        let cellPointer=this.cellPointerInstance(index,key);
                        if( cellPointer.mousedown ){
                            if( cellPointer.mouseover && !cellPointer.cancelhold ){
                                this.state.options[key].callbacks.hold(this.gestureCallbackContents("cell","hold",event,index,key));
                            }
                            else if( !cellPointer.mouseover  ){
                                //drag (store for use by window event listener)
                                this.state.pointer.global.drag=true
                                cellPointer.callback=this.state.options[key].callbacks;
                                cellPointer.content=this.gestureCallbackContents("cell","drag",event,index,key);
                            }
                        }
                    },
                    cellClick(event,index,key){
                        this.editState([index,key]);
                        //determine single/double/triple click
                        let cellPointer=this.cellPointerInstance(index,key);
                        cellPointer.click++;
                        if(cellPointer.click==1){
                            setTimeout(()=>{
                                if(cellPointer.click==1){
                                    //single click response
                                    this.state.options[key].callbacks.click(this.gestureCallbackContents("cell","click",event,index,key))
                                }
                                else if(cellPointer.click==2){
                                    //double click response
                                    this.state.options[key].callbacks.dblclick(this.gestureCallbackContents("cell","dblclick",event,index,key))
                                }
                                else if(cellPointer.click==3){
                                    //triple click response
                                    this.state.options[key].callbacks.tplclick(this.gestureCallbackContents("cell","tplclick",event,index,key))
                                }
                                else{
                                    //not yet defined
                                }
                                cellPointer.click--;
                            },this.pointerDefault("cell").delay.click)
                        }
                        else{
                            setTimeout(()=>{
                                cellPointer.click--;
                            },this.pointerDefault("cell").delay.click)
                        }
                    },
                    rowPointerInstance(index,row){
                        let rowKey = this.getRowKey(row);
                        let rowPointer = this.pointerGet("row",rowKey);
                        let rowPointerDefault = this.pointerDefault("row");
                        if( !rowPointer ){
                            rowPointer=JSON.parse(JSON.stringify(rowPointerDefault));
                            this.pointerSet("row",rowKey,rowPointer)
                        }
                        return rowPointer;
                    },
                    rowMouseOver(event,index,row){
                        let rowPointer=this.rowPointerInstance(index,row);
                        rowPointer.mouseover=true;
                        rowPointer.mousedown ? rowPointer.canceldrag = true : 0;
                        rowPointer.over++;
                        setTimeout(()=>{
                            this.rowHover(event,index,row);
                        },this.pointerDefault("row").delay.hover);
                    },
                    rowMouseOut(event,index,row){
                        let rowPointer=this.rowPointerInstance(index,row);
                        rowPointer.mouseover = false;
                    },
                    rowHover(event,index,row){
                        let rowPointer=this.rowPointerInstance(index,row);
                        rowPointer.over--;
                        if( rowPointer.mouseover && !this.state.pointer.global.mousedown && rowPointer.over==0  ){
                            this.state.rowOptions.callbacks.hover(this.gestureCallbackContents("row","hover",event,index,row))
                        }
                    },
                    rowMouseDown(event,index,row){
                        let rowPointer = this.rowPointerInstance(index,row);
                        rowPointer.mousedown = true;
                        this.tieToMouseDownStack(rowPointer);
                        setTimeout(()=>{
                            this.rowHold(event,index,row);
                        },this.pointerDefault("row").delay.hold);
                    },
                    rowMouseUp(event,index,row){
                        let rowPointer = this.rowPointerInstance(index,row);
                        rowPointer.mousedown=false;
                    },
                    rowHold(event,index,row){
                        let rowPointer=this.rowPointerInstance(index,row);
                        if( rowPointer.mousedown ){
                            if( rowPointer.mouseover && !rowPointer.cancelhold ){
                                this.state.rowOptions.callbacks.hold(this.gestureCallbackContents("row","hold",event,index,row));
                            }
                            else if( !rowPointer.mouseover ){
                                //drag (store for use by window event listener)
                                this.state.pointer.global.drag=true;
                                rowPointer.callback=this.state.rowOptions.callbacks;
                                rowPointer.content=this.gestureCallbackContents("row","drag",event,index,row);
                            }
                        }
                    },
                    rowClick(event,index,row){
                        //determine single/double/triple click
                        let rowPointer = this.rowPointerInstance(index,row);
                        rowPointer.click++;
                        if(rowPointer.click==1){
                            setTimeout(()=>{
                                if(rowPointer.click==1){
                                    //single click response
                                    this.state.rowOptions.callbacks.click(this.gestureCallbackContents("row","click",event,index,row))
                                }
                                else if(rowPointer.click==2){
                                    //double click response
                                    this.state.rowOptions.callbacks.dblclick(this.gestureCallbackContents("row","dblclick",event,index,row))
                                }
                                else if(rowPointer.click==3){
                                    //triple click response
                                    this.state.rowOptions.callbacks.tplclick(this.gestureCallbackContents("row","tplclick",event,index,row))
                                }
                                else{
                                    //not yet defined
                                }
                                rowPointer.click--;
                            },this.pointerDefault("row").delay.click);
                        }
                        else{
                            setTimeout(()=>{
                                rowPointer.click--;
                            },this.pointerDefault("row").delay.click);
                        }
                    },
                    // helper function gets/instantiates a tablePointer
                    tablePointerInstance(){ 
                        let tablePointer = this.pointerGet("table");
                        /*  Object that holds table Pointer instance 
                            (Virtualized state of the current table)
                            if no instance of tablePointer exists then create
                            using defaults set above
                         */
                        let tablePointerDefault = this.pointerDefault("table");
                        if( !tablePointer ){
                            tablePointer=JSON.parse(JSON.stringify(tablePointerDefault));
                            this.pointerSet("table",null,tablePointer);
                        }
                        return tablePointer;
                    },
                    tableMouseOver(event){
                        let tablePointer = this.tablePointerInstance();
                        tablePointer.mouseover = true;
                        tablePointer.mousedown ? tablePointer.canceldrag : 0;
                        tablePointer.over++;
                        setTimeout(()=>{
                            this.tableHover(event);
                        },this.pointerDefault("table").delay.hold)
                    },
                    tableMouseOut(event){
                        //initiate event oinly if mouse is still hovered over table
                        let tablePointer=this.tablePointerInstance();
                        tablePointer.mouseover = false;
                    },
                    tableHover(event){
                        let tablePointer=this.tablePointerInstance();
                        tablePointer.over--;
                        if(tablePointer.mouseover && !this.state.pointer.global.mousedown && tablePointer.over==0){
                            this.state.tableOptions.callbacks.hover(
                                this.gestureCallbackContents("table","hover",event,-1,this.state.data)
                            );
                        }
                    },
                    tableMouseDown(event){
                        let tablePointer = this.tablePointerInstance();
                        tablePointer.mousedown = true;
                        this.tieToMouseDownStack(tablePointer);
                        setTimeout(()=>{
                            this.tableHold(event);
                        },this.pointerDefault("table").delay.hold);
                    },
                    tableMouseUp(event){
                        let tablePointer = this.tablePointerInstance();
                        tablePointer.mousedown = false;
                    },
                    tableHold(event){
                        let tablePointer = this.tablePointerInstance();
                        if(tablePointer.mousedown){
                            if(tablePointer.mouseover && !tablePointer.cancelhold){
                                this.state.tableOptions.callbacks.hold(
                                    this.gestureCallbackContents("table","hold",event,-1,this.state.data)
                                );
                            }
                            else if( !tablePointer.mouseover ){
                                this.state.pointer.global.drag = true;
                                tablePointer.callback =  this.state.tableOptions.callbacks;
                                tablePointer.content = this.gestureCallbackContents("table","hold",event,-1,this.state.data);
                            }
                        }
                    },
                    tableClick(event){
                        let tablePointer = this.tablePointerInstance();
                        tablePointer.click++;
                        if(tablePointer.click == 1 ) { //The first click!
                            setTimeout(()=>{
                                console.log(tablePointer.click);
                                if(tablePointer.click==1){
                                    this.state.tableOptions.callbacks.click(
                                        this.gestureCallbackContents(
                                            "table","click",event,-1,this.state.data
                                        )
                                    )
                                }
                                else if(tablePointer.click==2){
                                    this.state.tableOptions.callbacks.dblclick(
                                        this.gestureCallbackContents(
                                            "table","dblclick",event,-1,this.state.data
                                        )
                                    );
                                }
                                else if(tablePointer.click==3){
                                    this.state.tableOptions.callbacks.tplclick(
                                        this.gestureCallbackContents(
                                            "table","tplclick",event,-1,this.state.data
                                        )
                                    )
                                }
                                tablePointer.click--;
                            },this.pointerDefault("table").delay.click);
                        }
                        else{
                            setTimeout(()=>{
                                tablePointer.click--;
                            },this.pointerDefault("table").delay.click);
                        }
                    },
                }
            </script>
        </widget-grid>`,
            wrap:false,
            defaults:{
                data:[
                    {
                        "Id":1,
                        "Name":"Ryan",
                        "Age":27,
                        "Email":"test@test.com",
                        "Is":false
                    } /*... More data */
                ],
                options:{
                    "Id":{
                        alias:"UserID",
                        pk:true,
                        put:false,
                        visible:false
                    },
                    "Name":{
                        alias:"Involved Person"
                    },
                    "Age":{
                        alias:"Incident Age",
                        type:Number,
                    },
                    "Is":{
                    }
                },
                tableOptions:{
                    post:true,
                    delete:true
                },
                typeSort:{
                    "String":(a,b)=>{
                        return a.localeCompare(b);
                    },
                    "Number":(a,b)=>{
                        a=a==null?-Infinity:a;
                        b=b==null?-Infinity:b;
                        let result = parseFloat(a)-parseFloat(b);
                        if(isNaN(result)){
                            return 0;
                        }
                        else{
                            result=result==-Infinity?-1:result;
                            result=result==Infinity?1:result;
                            return result;
                        }
                    },
                    "Date":(a,b)=>{
                        return a-b;
                    },
                    "Boolean":(a,b)=>{
                        return a-b;
                    }
                },
                callbacks:{ /* Handle your server side actions by defining your own callbacks */
                    put:(updated)=> console.log(updated),
                    post:(created)=> console.log(created),
                    delete:(deleted)=> console.log(deleted)
                },
                theme:{
                    bg:"light",
                    border:"light",
                    text:"dark",
                    matchContents:true
                }
            }
        }
    }
})