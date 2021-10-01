const tooltips = {
    "code-html": {
        0: {
            title: "HTML5 DOCTYPE",
            text: "This tells the browser that the code is in HTML5 format."
        },
        6: {
            title: "HTML Encoding",
            text: `This tag specifies how the rest of the document is encoded. Historically, this was important
            to let the browser know how to decode non-ASCII text, but nowadays UTF-8 is pretty standard
            across all of the web, so this tag doesn't have much meaning.`
        },
        8: {
            title: "Mobile viewport",
            text: `This meta tag tells the browser how a mobile device should view the website. By default,
            most mobile browsers scale down the website so it would fit on a small viewport. However,
            since we are using a responsive layout enabled by the Bootstrap CSS library, we can set the
            viewport not to scale the webpage on mobile.`,
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag#viewport_basics",
        },
        10: {
            title: "Bootstrap CSS",
            text: `Bootstrap is an excellent CSS framework which enables people with novice knowledge in CSS
            and web development to create professional, high quality web applications, with minimal effort.
            This example uses the CDN version of Bootstrap, meaning it loads directly from a CDN and does
            not need to be downloaded.`,
            link: "https://getbootstrap.com/docs/5.0/getting-started/download/#cdn-via-jsdelivr",
        },
        12: {
            title: "Bootstrap Icons",
            text: `Bootstrap Icons is a high-quality icon library, from the creators of Bootstrap. It has
            a set of basic icons, which allow us to create nicely designed icons. In our example, the delete
            button uses a trash icon, which is loaded thanks to this tag. The icons are loaded into the browser
            as an SVG font, which means the icons behave similar to text in terms of coloring and sizing.`,
            link: "https://icons.getbootstrap.com/#install",
        },
        15: {
            title: "HTML Title",
            text: `This title is displayed in the browser's tab as the document's title.`
        },
        22: {
            title: "The Todo App main element",
            text: `The Todo Vue.js application will be mounted on this div element,
            which means that once the application is created - this will be the part of the page
            which will be controlled by the application. We will set the id of the div to <code>app</code>
            so that <code>app.mount('#app')</code> will locate this element.`,
            link: "https://v3.vuejs.org/guide/instance.html#creating-an-application-instance",
        },
        24: {
            title: "Bootstrap container class",
            text: `The Bootstrap container puts all of the page content in the center, instead of pulling it
            to the sides of the web page.`,
            link: "https://getbootstrap.com/docs/5.0/layout/containers/#default-container",
        },
        26: {
            title: "Bootstrap spacing shorthands",
            text: `The <code>my-3</code> CSS class is a special spacing attribute which creates a margin on the Y
            axis, meaning it spaces the div a bit from the top and from the bottom using the CSS margin property.
            For more information, click on the button below.`,
            link: "https://getbootstrap.com/docs/5.0/utilities/spacing/",
        },
        30: {
            title: "Form submit handler",
            text: `The <code>form</code> element allows the browser to control the submission of a new task easily.
            The <code>submit</code> event is a DOM event which fires when a form is submitted, either using
            a form button, or the return key. However, the standard behavior of an HTML form is to submit
            the contents of the form back to the web server and reload the page, which is not needed in a
            single page application, such as this. To prevent letting the browser launch the default behavior,
            we must use the <code>.prevent</code> handler modifier.<br/><br/>
            Vue.js knows that it will need to call when the <code>submit</code> event is launced on this form
            due to the <code>@</code> sign which prefixes the event attribute.<br/><br/>
            The function which will be executed when the form is submitted is <code>addTask</code>.`,
            link: "https://v3.vuejs.org/guide/events.html#event-modifiers"
        },
        32: {
            title: "Bootstrap CSS Grid",
            text: `The Bootstrap grid is a convenient mechanism for designing web pages. Bootstrap uses
            a 12 column system for this. In this example, we use 10 columns from the Bootstrap grid for the
            text input, and 2 for the button, which totals to 12 columns.`,
            link: "https://getbootstrap.com/docs/5.0/layout/grid/",
        },
        36: {
            title: "v-model binding",
            text: `Here is where all the magic happens. Vue.js knows how to create a two-way binding between
            the component's data and the HTML elements within the attached DOM. This means that if the user
            changes the input, the component data will automatically change, and if the component data changes
            programmatically, then the HTML element will update automatically.<br/><br/>
            In this example, this input field is bound to the <code>newTodo</code> variable.`,
            link: "https://v3.vuejs.org/guide/forms.html#basic-usage",
        },
        42: {
            title: "Conditional attributes",
            text: `Vue.js supports setting HTML attributes conditionally using the colon sign (<code>:</code>).
            The <code>:disabled</code> conditional attribute receives a JavaScript expression to evaluate. If
            the expression is <code>true</code> then the <code>disabled</code> attribute will be applied to the
            <code>button</code> element.<br/><br/>
            In this scenario, we want to disable the button if there is no todo entered yet. As we know, the
            new todo is represented by the <code>newTodo</code> data attribute which we created and binded to
            the input. By checking if <code>newTodo.length === 0</code>, we are checking if the user has not
            entered any text, since if no text is entered, the length of the <code>newTodo</code> string will be 0.`,
            link: "https://v3.vuejs.org/guide/template-syntax.html#attributes",

        },
        52: {
            title: "Bootstrap list group",
            text: `Bootstrap can create a simple list using a CSS class called <code>list-group</code>. For more
            information, click on the link below.`,
            link: "https://getbootstrap.com/docs/5.0/components/list-group/",
        },
        54: {
            title: "For loops",
            text: `Vue.js supports creating a list of items of the same type one after the other, using the
            <code>v-for</code> directive. In our case, we can use it to create multiple <code>li</code> elements,
            one for each todo.<br/><br/>
            In this syntax, the <code>todos</code> component data is being iterated on. In each iteration, the
            string itself is represented by the first argument <code>todo</code> whereas the index of the
            todo is represented by the second argument <code>index</code>. The names have been chosen arbitrarily.<br/><br/>
            Using the <code>index</code> notation is optional - it is useful in our example because deleting is easier
            when providing the index of the todo which needs to be removed from the list.`,
            link: "https://vuejs.org/v2/guide/list.html",
        },
        57: {
            title: "Vue.js template syntax",
            text: `Vue.js renders anything within the double brackets (in this example it is <code>todo</code>) as a JavaScript expression
            automatically, and will update within the HTML whenever the expression is updated.`,
            link: "https://v3.vuejs.org/guide/template-syntax.html",
        },
        60: {
            title: "Deleting a task",
            text: `Vue.js supports passing arguments into function calls. In this example, the <code>@click</code>
            directive will execute the <code>deleteTask</code> component method, and will provide it with the
            <code>index</code> of the task, since it was provided in the click handler.`
        },
        62: {
            title: "Bootstrap Icons usage",
            text: `To use the icon, the <code>i</code> element needs to be used along with the class which
            specifies which icon to use.`,
            link: "https://icons.getbootstrap.com/icons/trash/",
        },
        75: {
            title: "Load Vue.js from a CDN",
            text: `This command loads Vue.js 3 from a CDN.`
        },
        79: {
            title: "Todo App JavaScript code load",
            text: `This attribute tells the browser to load the code at the bottom of this page. 
            For the HTML page to render correctly and quickly, put the JavaScript at the end of the page.`
        },


    },
    "code-js": {
        6: {
            title: "Component data initialization",
            text: `Vue.js lets you initialize the component's data using a function called <code>data</code>.
            The function should return an object which will initialize the component's variables.`,
            link: "https://v3.vuejs.org/api/options-data.html"
        },
        15: {
            title: "Todos model",
            text: `The <code>todos</code> variable will store an array of strings, which will represent our todo list.
            It is initialized as an empty array because we want the todo list to be empty when the application loads.`,
        },
        21: {
            title: "New task model",
            text: `The <code>newTodo</code> variable will store the new task which will be entered by the user into
            the input, and will be later on added to the <code>todos</code> array, once the user adds the task.
            It is initialized to an empty string because we want it to be empty when the application loads.`,
        },
        32: {
            title: "Component initialization function",
            text: `When a component is initialized and mounted on the DOM, the <code>mounted</code> callback fires.
            In this function, the component's data is initialized and we can now modify it. We can load the list
            of todos from the browser's local storage here, so that the todos will be persistent after refreshing.`,
            link: "https://v3.vuejs.org/api/options-lifecycle-hooks.html#mounted",
        },
        43: {
            title: "Read data from Local Storage",
            text: `This function reads a string value from the local storage, under the key "todos".`,
            link: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
        },
        52: {
            title: "Check if todo list is already saved",
            text: `On the first run, nothing will be saved in local storage, which means this function will return <code>null</code>.`
        },
        64: {
            title: "Parse JSON into todos array",
            text: `Since local storage only supports strings, we need to load the string as a serialized JSON array.`,
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",
        },
        79: {
            title: "addTask function",
            text: `This function will be called whenever the new task form was submitted, either by clicking the button
             inside the form, or by clicking the return key - due to setting the <code>@submit.prevent="addTask"</code> attribute on the
             <code>form</code> element.`
        },
        89: {
            title: "Update the component todos model",
            text: `The <code>push</code> command is a native JavaScript command which pushes an item into an array.
            This line pushes a new todo string into the <code>todos</code> array. Since the array is changed, Vue knows
            to automatically update the view according to the change. In this case, the <code>v-for</code> directive
            we used to render the tasks will update, and add another <code>&lt;li&gt;</code> element.<br/><br/>
            In addition, Vue will also trigger the <code>watch</code> function at the bottom of this code.`,
        },
        102: {
            title: "Reset the newTodo variable",
            text: `Once the todo is entered into the todo list, we want the input box to clear. This can be done
            by setting <code>newTodo</code> to an empty string, since it is bound to the new todo input box.`
        },
        108: {
            title: "deleteTask function",
            text: `This function will be called when the delete button is clicked on the todo item. The function
            also receives an argument according to the attribute we've assigned to the button: 
            <code>@click="deleteTask(index)"</code>. The <code>index</code> argument corresponds to the index of the
            todo we want to delete from the <code>todos</code> array.`
        },
        119: {
            title: "Removing the todo string from todos",
            text: `The function <code>splice</code> is a native JavaScript string method, which removes a portion 
            of an array from a given index.<br/><br/> 
            The first argument specifies the index in which to start removing from, and the second argument specifies 
            how many items we want to remove, which in our case is just 1, because we only want to remove one todo.<br/><br/>
            As mentioned above, any change to the <code>todos</code> array triggers both a re-render of the todo list
            due to the <code>v-for</code> directive, and the <code>todos</code> watch function.`,
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice",
        },
        132: {
            title: "Watch functions",
            text: `Vue.js supports triggering functions if the component's data has changed. To use it, create an
            item under the <code>watch</code> key of the Vue component which is named with the same name as the 
            variable you want to track. The value can either be a function, or another object with more properties
            on the watch function, as well as the watch function itself under the <code>handler</code> key.`,
            link: "https://v3.vuejs.org/guide/migration/watch.html"
        },
        136: {
            title: "todos Watch function",
            text: `The name of the watch key must be identical to a component data variable you want to watch.
            The value of the watch key can either be a function, or an object with the <code>handler</code> function
            alonside additional configuration.<br/><br/>
            The handler also receives two arguments, the new value and the old value. Since this example does not need
            to know the old value of the todo list, we can omit the function's arguments.`
        },
        148: {
            title: "Save the list to localStorage",
            text: `This function saves the todo list by serializing it into a JSON string and saving it using
            <code>setItem</code> on the <code>todos</code> key. It will happen every time the <code>todos</code> data
            variable will be changed, because it is in a the <code>todos</code> watch function.`,
            link: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
        },
        155: {
            title: "JSON serialization",
            text: `This function takes a JavaScript object and serializes it by returninh a JSON string with the same structure.`,
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",
        },
        166: {
            title: "Deep watching",
            text: `By default, watching the component's data only triggers when the entire variable is replaced. If
            the variable is mutated (changed internally), then the <code>deep: true</code> item needs to be added
            to the watch object.`
        },
        182: {
            title: "createApp",
            text: `Every Vue application needs to be created from a component using the <code>Vue.createApp</code> function.`,
            link: "https://v3.vuejs.org/guide/instance.html",
        },
        193: {
            title: "Mounting the application",
            text: `The application instance needs to be mounted into a DOM element. To do this, we need to select
            the element we want to mount the application to. In this case, it will be <code>&lt;div id="app"&gt;</code>.`,
            link: "https://v3.vuejs.org/guide/instance.html#the-root-component",
        },
    }
}

    function popup(e, type, index) {
        popout();
        const tooltip = document.getElementById("tooltip-" + type);
        const data = tooltips[type][index];
        if (!data) {
            return;
        }

        tooltip.querySelector(".card-title").innerHTML = data.title;
        tooltip.querySelector(".card-text").innerHTML = data.text;
        tooltip.querySelector("a").href = data.link;
        tooltip.querySelector("a").style.display = data.link ? "inline-block" : "none"

        tooltip.classList.add("visible");
        tooltip.style.top = (e.target.offsetTop + 50) + "px";

    }

    function popout() {
        document.getElementById("tooltip-code-js").classList.remove("visible");
        document.getElementById("tooltip-code-html").classList.remove("visible");
    }

    function click(e, type, index) {
        const data = tooltips[type][index];
        if (!data) {
            return;
        }
        if (!data.link) {
            return;
        }
        window.open(data.link, '_blank');


    }
window.onload = function() {

    // fix the highlighter to create spans out of all text elements
    document.querySelectorAll("code").forEach(code => code.childNodes.forEach((x, index) => {
        // if element is a text node
        if (x.nodeType === 3) {
            // replace it with a span with the same content
            const s = document.createElement("span");
            s.textContent = x.textContent;
            x.replaceWith(s);
            x = s;

        }

        x.addEventListener("mouseover", (e) => console.log(e.target, code.id, index));

        const tooltipData = tooltips[code.id][index];
        if (tooltipData) {
            if ('ontouchstart' in window) {
                console.log("mobile");
                x.addEventListener("click", (e) => popup(e, code.id, index));
            } else {
                x.addEventListener("mouseover", (e) => popup(e, code.id, index));
                x.addEventListener("click", (e) => click(e, code.id, index));
                x.addEventListener("mouseout", (e) => popout());
            }
            x.classList.add("tooltip-enabled");

        }

    }));

    document.querySelectorAll("#code-js").forEach(code => code.childNodes.forEach((x, index) => {
        const spacingBefore = x.textContent.substr(0, x.textContent.length - x.textContent.trimLeft().length);
        const spacingAfter = x.textContent.substr(x.textContent.trimRight().length);
        const textInside = x.textContent.trim();

        if (!textInside) {
            return;
        }

        const spacingBeforeSpan = document.createElement("span");
        const textInsideSpan = document.createElement("span");
        const spacingAfterSpan = document.createElement("span");

        spacingBeforeSpan.textContent = spacingBefore;
        textInsideSpan.textContent = textInside;
        spacingAfterSpan.textContent = spacingAfter;

        x.textContent = "";
        x.appendChild(spacingBeforeSpan);
        x.appendChild(textInsideSpan);
        x.appendChild(spacingAfterSpan);

        if (x.classList.contains("tooltip-enabled")) {
            x.classList.remove("tooltip-enabled");
            textInsideSpan.classList.add("tooltip-enabled");
        }


    }));

}