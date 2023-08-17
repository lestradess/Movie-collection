export const SaveStorage = (key, item) => {
    // Get items from localStorage if not items set new Array
    let items = JSON.parse(localStorage.getItem(key)) || [];

    // Push the new movie into the array
    items.push(item);

    // Save the updated array back to localStorage
    localStorage.setItem(key, JSON.stringify(items));

    //retunn last item
    return item;
}
