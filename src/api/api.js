export const fetchPhoto = async (searchParam) => {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${searchParameter}`, {
        headers: {
            Authorization: 'Y8ESpTBDSSubxdsRobqXXYWyLezQGXS5VKmot8xkC63RNF6JbGyFLL8d'
        }
    });
    return response.json();
};