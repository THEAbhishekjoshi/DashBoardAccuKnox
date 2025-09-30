import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    "categories": [
        {
            "id": "cspm",
            "name": "CSPM Executive Dashboard",
            "widgets": [
                {
                    "id": "cspm-1",
                    "name": "Cloud Accounts",
                    "text": "Shows number of connected and not connected accounts."
                },
                {
                    "id": "cspm-2",
                    "name": "Cloud Risk Assessment",
                    "text": "Displays overall cloud account risk posture."
                },
                {
                    "id": "cspm-3",
                    "name": "Cloud Management",
                    "text": "this is cloud management"

                },
            ]
        },
        {
            "id": "cwpp",
            "name": "CWPP Dashboard",
            "widgets": [
                {
                    "id": "cwpp-1",
                    "name": "Top 5 Namespace Alerts",
                    "text": "Shows top alerts for Kubernetes namespaces."
                },
                {
                    "id": "cwpp-2",
                    "name": "Workload Alerts",
                    "text": "Displays alerts related to workloads."
                },
            ]
        },
        {
            "id": "registry",
            "name": "Registry Scan",
            "widgets": [
                {
                    "id": "registry-1",
                    "name": "Image Risk Assessment",
                    "text": "Total vulnerabilities found in scanned images."
                },
                {
                    "id": "registry-2",
                    "name": "Image Security Issues",
                    "text": "Lists security issues in container images."
                },
            ]
        }
    ]
}
export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addWidget: (state, action) => {
            const { categoryId, title, text } = action.payload;
            const category = state.categories.find(cat => cat.id === categoryId);
            if (!category) return;

            const lastWidget = category.widgets[category.widgets.length - 1];
            const str1 = lastWidget.id.split("-");  
            str1[1] = parseInt(str1[1]) + 1;        
            const newId = str1.join("-");

            category.widgets.push({
                id:newId,
                name:title,
                text
            })
            console.log("show me:",category.widgets)
        },
        removeWidget: (state, action) => {
            const idsToRemove = action.payload;
            for (let i = 0; i < state.categories.length; i++) {
                state.categories[i].widgets = state.categories[i].widgets.filter(
                    widget => !idsToRemove.includes(widget.id)
                );
            }
        },

        resetAllWidgets: () => JSON.parse(JSON.stringify(initialState))
    },

})

export const { addWidget, resetAllWidgets, removeWidget } = categoriesSlice.actions;
export const categorySelector = (state) => state.categories;
export default categoriesSlice.reducer;
