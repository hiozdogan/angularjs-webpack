MenuDemandFormService.$inject = ['$q', '$http']

export default function MenuDemandFormService($q, $http)
{
    var obj = {
        getProducts: function ()
        {
            return $http.get("data/menulist.json");
        },
        updateProductsWithEditedOnes: function (products, demandRequestObjects)
        {
            var alreadyEditedProducts = localStorage.getItem("products");
            if (alreadyEditedProducts)
            {
                try
                {
                    alreadyEditedProducts = JSON.parse(alreadyEditedProducts);
                }
                catch (err)
                {
                    alreadyEditedProducts = null;
                }

                if (alreadyEditedProducts)
                {
                    alreadyEditedProducts.forEach(function (product)
                    {

                        var category = _.find(products, function (c) { return c.Id === product.categoryId; });
                        if (!category)
                        {
                            return;
                        }
                        var productAtCategory = _.find(category.Products, function (p) { return p.ProductId === product.ProductId; });

                        if (productAtCategory)
                        {
                            Object.assign(productAtCategory, product);
                            demandRequestObjects[product.ProductId] = productAtCategory;
                        }
                        else
                        {
                            category.Products.push(product);
                            demandRequestObjects[product.ProductId] = product;
                        }

                    });

                }
            }

            return products;
        },
        saveProducts: function (products)
        {
            var deferred = $q.defer();
            localStorage.setItem("products", JSON.stringify(products));
            setTimeout(
                function ()
                {
                    deferred.resolve(true);
                }, 500
            );

            return deferred.promise;

        }
    };
    return obj;

}
