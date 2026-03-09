export const fetchPhoto = async (searchParameter) => {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${searchParameter}&orientation=landscape&per_page=50`, {
        headers: {
            Authorization: 'Y8ESpTBDSSubxdsRobqXXYWyLezQGXS5VKmot8xkC63RNF6JbGyFLL8d'
        }
    });
    return response.json();
};

