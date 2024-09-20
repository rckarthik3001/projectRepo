export const fetchData = async (endpoint) => {
    const response = await fetch(`https://api.example.com/${endpoint}`);
    const data = await response.json();
    return data;
};
