import AsyncHandler from 'express-async-handler';
import Product from '../../models/product.js';

//? Get a list of product based on it category combined with pagination system and filter system
//? /api/products/:category?page=0
//? Public Route
const getListOfProducts = AsyncHandler(async (req, res) => {
    //TODO: Pagination System
    const pageSize = 6;
    const currentPage = Number(req.query.page) || 0;
    
    //TODO: Price Filter
    const lowPrice = Number(req.query.lowPrice) || 0;
    const highPrice = Number(req.query.highPrice) || 7600;

    //TODO: Get list of brands to send to frontend 
    const listOfBrands = await Product.find({ category: req.params.category }).select({
        "brand": 1
    });
    const ArrayOfBrands = [];
    for (let i = 0; i < listOfBrands.length; i++) {
        if (!ArrayOfBrands.includes(listOfBrands[i].brand)) {
            ArrayOfBrands.push(listOfBrands[i].brand);
        }
    }
    
    //! LAPTOP FILTERS 
    //TODO : Filter laptops based on screen sizes
    const arrayOfLaptopScreenSizes = [];
    //TODO: Filter Laptops based on RAM Sizes
    const arrayOfLaptopRAMSize = [];
    //TODO: Filter Laptops based on Proccessor Type
    const arrayOfLaptopProcessorType = [];

    if (req.params.category === 'laptops') {
        //TODO: Fetch list of screenSizes and push it to array above
        const listOfScreenSizes = await Product.find({ category: 'laptops' }).select({
            "details": {
                "displaySizeInches": 1
            }
        });
        for (let i = 0; i < listOfScreenSizes.length; i++) {
            if (!arrayOfLaptopScreenSizes.includes(listOfScreenSizes[i].details.displaySizeInches)) {
                arrayOfLaptopScreenSizes.push(listOfScreenSizes[i].details.displaySizeInches);
            }
        }

        //TODO: Fetch list of RAM and push it to array above
        const listOfRAMSizes = await Product.find({ category: 'laptops' }).select({
            "details": {
                "ram": 1
            }
        });
        for (let i = 0; i < listOfRAMSizes.length; i++) {
            if (!arrayOfLaptopRAMSize.includes(listOfRAMSizes[i].details.ram)) {
                arrayOfLaptopRAMSize.push(listOfRAMSizes[i].details.ram);
            }
        }

        //TODO: Fetch list of proccessor types and push it to array above
        const listOfProcessorTypes = await Product.find({ category: 'laptops' }).select({
            "details": {
                "proccessorType": 1
            }
        });
        for (let i = 0; i < listOfProcessorTypes.length; i++) {
            if (!arrayOfLaptopProcessorType.includes(listOfProcessorTypes[i].details.proccessorType)) {
                arrayOfLaptopProcessorType.push(listOfProcessorTypes[i].details.proccessorType);
            }
        }
    } 
    //! END OF LAPTOP FILTERS

    //! TV Filters
    //TODO: Filter tvs based on screenSizes
    const arrayOfTVScreenSizes = [];
    if (req.params.category === 'tvs') {
        //TODO: Fetch all screenSizes of TVS and push it to array above
        const listOfTVScreenSizes = await Product.find({ category: 'tvs' }).select({
            "tvsDetail": {
                "screenSizes": 1
            }
        });
        for (let i = 0; i < listOfTVScreenSizes.length; i++) {
            if (!arrayOfTVScreenSizes.includes(listOfTVScreenSizes[i].tvsDetail.screenSizes)) {
                arrayOfTVScreenSizes.push(listOfTVScreenSizes[i].tvsDetail.screenSizes);
            }
        }
    }
    const arrayOfTVScreenSolution = [];
    if (req.params.category === 'tvs') {
        const listOfTVScreenSolution = await Product.find({ category: 'tvs' }).select({
            "tvsDetail": {
                "screenResolution": 1
            }
        });
        for (let i = 0; i < listOfTVScreenSolution.length; i++) {
            if (!arrayOfTVScreenSolution.includes(listOfTVScreenSolution[i].tvsDetail.screenResolution)) {
                arrayOfTVScreenSolution.push(listOfTVScreenSolution[i].tvsDetail.screenResolution);
            }
        }
    }

    //! END OF TV FILTER

    //! Phones Filters
    const arrayOfPhoneColour = [];
    if (req.params.category === 'phones') {
        const listOfPhoneColour = await Product.find({ category: 'phones' }).select({
            "phoneDetail": {
                "Colour": 1
            }
        });
        for (let i = 0; i < listOfPhoneColour.length; i++) {
            if (!arrayOfPhoneColour.includes(listOfPhoneColour[i].phoneDetail.Colour)) {
                arrayOfPhoneColour.push(listOfPhoneColour[i].phoneDetail.Colour);
            }
        }
    }
    //! End of phones Filters

    //TODO: Brands Filter
    let pickedBrands = req.query.brands.split(',');
    for (let i = 0; i < pickedBrands.length; i++) {
        if (pickedBrands[i] == "") {
            pickedBrands.splice(i, 1);
        }
    }

    //TODO: lAPTOP filters summary 
    let pickedLaptopScreenSizes;
    if (req.query.screenSizes) {
        pickedLaptopScreenSizes = req.query.screenSizes.split(',');
        for (let i = 0; i < pickedLaptopScreenSizes.length; i++) {
            if (pickedLaptopScreenSizes[i] == "") {
                pickedLaptopScreenSizes.splice(i, 1);
            }
        }
    }
    let pickedRAMSizes;
    if (req.query.ramSize) {
        pickedRAMSizes = req.query.ramSize.split(',');
        for (let i = 0; i < pickedRAMSizes.length; i++) {
            if (pickedRAMSizes[i] == "") {
                pickedRAMSizes.splice(i, 1);
            }
        }
    }
    let pickedProccessorTypes;
    if (req.query.processorType) {
        pickedProccessorTypes = req.query.processorType.split(',');
        for (let i = 0; i < pickedProccessorTypes.length; i++) {
            if (pickedProccessorTypes[i] == "") {
                pickedProccessorTypes.splice(i, 1);
            }
        }
    }
    
    //TODO: TV filters summary 
    //TODO: input => ["12inch", ","] 
    //TODO: output => ["12inch"]
    let pickedTVScreenSize;
    if (req.query.tvScreenSize) {
        pickedTVScreenSize = req.query.tvScreenSize.split(',');
        for (let i = 0; i < pickedTVScreenSize.length; i++) {
            if (pickedTVScreenSize[i] == "") {
                pickedTVScreenSize.splice(i, 1);
            }
        }
    }
    let pickedTVScreenSolution;
    if (req.query.tvScreenSolution) {
        pickedTVScreenSolution = req.query.tvScreenSolution.split(',');
        for (let i = 0; i < pickedTVScreenSolution.length; i++) {
            if (pickedTVScreenSolution[i] == "") {
                pickedTVScreenSolution.splice(i, 1);
            }
        }
    }

    //TODO: PHones Filters summary
    let pickedPhoneColour;
    if (req.query.phoneColour) {
        pickedPhoneColour = req.query.phoneColour.split(',');
        for (let i = 0; i < pickedPhoneColour.length; i++) {
            if (pickedPhoneColour[i] == "") {
                pickedPhoneColour.splice(i, 1);
            }
        }
    }

    //TODO Start query based on it has no filters or has at least 1 filter
    if (pickedBrands[0] == undefined && 
        pickedLaptopScreenSizes == undefined &&
        pickedRAMSizes == undefined &&
        pickedProccessorTypes == undefined &&
        pickedTVScreenSize == undefined && 
        pickedTVScreenSolution == undefined &&
        pickedPhoneColour == undefined &&
        lowPrice === 0) {

        console.log('No filters');
        //! No filters applied
        const totalProductsOfThatCategoryWithNoBrands = await Product.countDocuments({ 
            category: req.params.category
        });

        const productListNoBrand = await Product.find({ 
            category: req.params.category,
            price: { $gt: lowPrice, $lt: highPrice }
            })
            .select({
            "rating": 1,
            "numReviews": 1,
            "price": 1,
            "countInStock": 1,
            "_id": 1,
            "name": 1,
            "image": 1,
            "onSale": 1,
            "newProduct": 1,
            "preOrder": 1
        }).skip(pageSize * currentPage).limit(pageSize);

        if (productListNoBrand) {
            res.status(200).send({ 
                listItems: productListNoBrand, 
                brands: ArrayOfBrands,
                screenSizes: arrayOfLaptopScreenSizes,
                rams: arrayOfLaptopRAMSize,
                processorTypes: arrayOfLaptopProcessorType,
                tvScreenSize: arrayOfTVScreenSizes,
                tvScreenSolutions: arrayOfTVScreenSolution,
                phoneColour: arrayOfPhoneColour,
                currentPickedBrands: [],
                currentPickedLaptopScreenSizes: [],
                currentPickedRam: [],
                currentPickedProcessorType: [],
                currentPickedTVScreenSize: [],
                currentPickedTVScreenSolution: [],
                currentPickedPhoneColour: [],
                page: pageSize, 
                pages: Math.ceil(totalProductsOfThatCategoryWithNoBrands/pageSize)
            });
        } else {
            res.status(404);
            throw new Error("Can't find the list of product");
        }
    } else {
        console.log('Has filters');

        //TODO: Check if pickedLaptopScreenSizes and pickedBrands is empty or not
        //TODO: If it empty mean that we want to search for everything, everyscreens, everybrands,...
        let noBrandFilters = false;
        if (pickedBrands[0] == undefined) {
            pickedBrands = ArrayOfBrands;
            noBrandFilters = true;
        }

        switch(req.params.category) {
            case 'laptops':
                let noLaptopScreenSizesFilter = false;
                if (pickedLaptopScreenSizes == undefined) {
                    pickedLaptopScreenSizes = arrayOfLaptopScreenSizes;
                    noLaptopScreenSizesFilter = true;
                }
        
                let noLaptopRAMSize = false;
                if (pickedRAMSizes == undefined) {
                    pickedRAMSizes = arrayOfLaptopRAMSize;
                    noLaptopRAMSize = true;
                }
        
                let noProcessorTypes = false;
                if (pickedProccessorTypes == undefined) {
                    pickedProccessorTypes = arrayOfLaptopProcessorType;
                    noProcessorTypes = true;
                }

                const totalProductsOfThatCategoryWithFilter = await Product.countDocuments({ 
                    category: req.params.category,
                    price: { $gt: lowPrice, $lt: highPrice },
                    brand: { $in: pickedBrands },
                    "details.displaySizeInches": {
                        $in: pickedLaptopScreenSizes
                    },
                    "details.ram": {
                        $in: pickedRAMSizes
                    },
                    "details.proccessorType": {
                        $in: pickedProccessorTypes
                    }
                });

                const productListWithBrands = await Product.find({ 
                    category: req.params.category,
                    price: { $gt: lowPrice, $lt: highPrice },
                    brand: { $in: pickedBrands },
                    "details.displaySizeInches": {
                        $in: pickedLaptopScreenSizes
                    },
                    "details.ram": {
                        $in: pickedRAMSizes
                    },
                    "details.proccessorType": {
                        $in: pickedProccessorTypes
                    }
                    })
                    .select({
                    "rating": 1,
                    "numReviews": 1,
                    "price": 1,
                    "countInStock": 1,
                    "_id": 1,
                    "name": 1,
                    "image": 1,
                    "onSale": 1,
                    "newProduct": 1,
                    "preOrder": 1
                }).skip(pageSize * currentPage).limit(pageSize);

            //TODO: We have these `if`s because we don't want to send the signal to make all the 
            //TODO: box checked on the front-end. Here we return what we receive in the start
            if (noBrandFilters) {
                pickedBrands = [];
            }
            if (noLaptopScreenSizesFilter) {
                pickedLaptopScreenSizes = [];
            }
            if (noLaptopRAMSize) {
                pickedRAMSizes = [];
            }
            if (noProcessorTypes) {
                pickedProccessorTypes = [];
            }

            console.log(productListWithBrands);
            console.log(pickedTVScreenSize);
            if (productListWithBrands) {
                res.status(200).send({ 
                    listItems: productListWithBrands, 
                    brands: ArrayOfBrands,
                    screenSizes: arrayOfLaptopScreenSizes,
                    rams: arrayOfLaptopRAMSize,
                    processorTypes: arrayOfLaptopProcessorType,
                    tvScreenSize: [],
                    tvScreenSolutions: [],
                    phoneColour: [],
                    currentPickedBrands: pickedBrands,
                    currentPickedLaptopScreenSizes: pickedLaptopScreenSizes,
                    currentPickedRam: pickedRAMSizes,
                    currentPickedProcessorType: pickedProccessorTypes,
                    currentPickedTVScreenSize: [],
                    currentPickedTVScreenSolution: [],
                    currentPickedPhoneColour: [],
                    page: pageSize, 
                    pages: Math.ceil(totalProductsOfThatCategoryWithFilter/pageSize)
                });
            } else {
                res.status(404);
                throw new Error("Can't find the list of product");
            };
            break;

            case 'tvs':
                console.log('tvs');
                let noTVScreenSizes = false;
                if (pickedTVScreenSize == undefined) {
                    pickedTVScreenSize = arrayOfTVScreenSizes;
                    noTVScreenSizes = true;
                }
                let noTVScreenSolution = false;
                if (pickedTVScreenSolution == undefined) {
                    pickedTVScreenSolution = arrayOfTVScreenSolution;
                    noTVScreenSolution = true;
                }

                const totalProductsOfTVWithFilter = await Product.countDocuments({ 
                    category: req.params.category,
                    price: { $gt: lowPrice, $lt: highPrice },
                    brand: { $in: pickedBrands },
                    "tvsDetail.screenSizes": {
                        $in: pickedTVScreenSize
                    },
                    "tvsDetail.screenResolution": {
                        $in: pickedTVScreenSolution
                    }
                });
                console.log(totalProductsOfTVWithFilter);

                const tvListWithBrands = await Product.find({ 
                    category: req.params.category,
                    price: { $gt: lowPrice, $lt: highPrice },
                    brand: { $in: pickedBrands },
                    "tvsDetail.screenSizes": {
                        $in: pickedTVScreenSize
                    },
                    "tvsDetail.screenResolution": {
                        $in: pickedTVScreenSolution
                    }
                    })
                    .select({
                    "rating": 1,
                    "numReviews": 1,
                    "price": 1,
                    "countInStock": 1,
                    "_id": 1,
                    "name": 1,
                    "image": 1,
                    "onSale": 1,
                    "newProduct": 1,
                    "preOrder": 1
                }).skip(pageSize * currentPage).limit(pageSize);
                console.log(tvListWithBrands);

                //TODO: We have these `if`s because we don't want to send the signal to make all the 
                //TODO: box checked on the front-end. Here we return what we receive in the start
                if (noBrandFilters) {
                    pickedBrands = [];
                }
                if (noTVScreenSizes) {
                    pickedTVScreenSize = [];
                }
                if (noTVScreenSolution) {
                    pickedTVScreenSolution = [];
                }

                if (tvListWithBrands) {
                    res.status(200).send({ 
                        listItems: tvListWithBrands, 
                        brands: ArrayOfBrands,
                        screenSizes: [],
                        rams: [],
                        processorTypes: [],
                        tvScreenSize: arrayOfTVScreenSizes,
                        tvScreenSolutions: arrayOfTVScreenSolution,
                        phoneColour: [],
                        currentPickedBrands: pickedBrands,
                        currentPickedLaptopScreenSizes: [],
                        currentPickedRam: [],
                        currentPickedProcessorType: [],
                        currentPickedTVScreenSize: pickedTVScreenSize,
                        currentPickedTVScreenSolution: pickedTVScreenSolution,
                        currentPickedPhoneColour: [],
                        page: pageSize, 
                        pages: Math.ceil(totalProductsOfTVWithFilter/pageSize)
                    });
                } else {
                    res.status(404);
                    throw new Error("Can't find the list of product");
                };        

                break;
            case 'phones': 
                    let noPhonesColour = false;
                    if (pickedPhoneColour == undefined) {
                        pickedPhoneColour = arrayOfPhoneColour;
                        noPhonesColour = true;
                    }
                
                    const totalProductsOfPhoneWithFilter = await Product.countDocuments({ 
                        category: req.params.category,
                        price: { $gt: lowPrice, $lt: highPrice },
                        brand: { $in: pickedBrands },
                        "phoneDetail.Colour": {
                            $in: pickedPhoneColour
                        }
                    });
                    console.log(totalProductsOfPhoneWithFilter);
                
                    const phonesListWithBrands = await Product.find({ 
                        category: req.params.category,
                        price: { $gt: lowPrice, $lt: highPrice },
                        brand: { $in: pickedBrands },
                        "phoneDetail.Colour": {
                            $in: pickedPhoneColour
                        }
                        })
                        .select({
                        "rating": 1,
                        "numReviews": 1,
                        "price": 1,
                        "countInStock": 1,
                        "_id": 1,
                        "name": 1,
                        "image": 1,
                        "onSale": 1,
                        "newProduct": 1,
                        "preOrder": 1
                    }).skip(pageSize * currentPage).limit(pageSize);
                
                    //TODO: We have these `if`s because we don't want to send the signal to make all the 
                    //TODO: box checked on the front-end. Here we return what we receive in the start
                    if (noBrandFilters) {
                        pickedBrands = [];
                    }
                    if (noPhonesColour) {
                        pickedPhoneColour = [];
                    }

                    if (phonesListWithBrands) {
                        res.status(200).send({ 
                            listItems: phonesListWithBrands, 
                            brands: ArrayOfBrands,
                            screenSizes: [],
                            rams: [],
                            processorTypes: [],
                            tvScreenSize: [],
                            tvScreenSolutions: [],
                            phoneColour: arrayOfPhoneColour,
                            currentPickedBrands: pickedBrands,
                            currentPickedLaptopScreenSizes: [],
                            currentPickedRam: [],
                            currentPickedProcessorType: [],
                            currentPickedTVScreenSize: [],
                            currentPickedTVScreenSolution: [],
                            currentPickedPhoneColour: pickedPhoneColour,
                            page: pageSize, 
                            pages: Math.ceil(totalProductsOfPhoneWithFilter/pageSize)
                        });
                    } else {
                        res.status(404);
                        throw new Error("Can't find the list of product");
                    };        
                break;
            default:
                const otherTotalProductsOfThatCategoryWithFilter = await Product.countDocuments({ 
                    category: req.params.category,
                    price: { $gt: lowPrice, $lt: highPrice },
                    brand: { $in: pickedBrands }
                });

                const otherProductListWithBrands = await Product.find({ 
                    category: req.params.category,
                    price: { $gt: lowPrice, $lt: highPrice },
                    brand: { $in: pickedBrands }}).select({
                    "rating": 1,
                    "numReviews": 1,
                    "price": 1,
                    "countInStock": 1,
                    "_id": 1,
                    "name": 1,
                    "image": 1,
                    "onSale": 1,
                    "newProduct": 1,
                    "preOrder": 1
                }).skip(pageSize * currentPage).limit(pageSize);

                if (noBrandFilters) {
                    pickedBrands = [];
                }

                if (otherProductListWithBrands) {
                    res.status(200).send({ 
                        listItems: otherProductListWithBrands, 
                        brands: ArrayOfBrands,
                        screenSizes: [],
                        rams: [],
                        processorTypes: [],
                        tvScreenSize: [],
                        tvScreenSolutions: [],
                        phoneColour: [],
                        currentPickedBrands: pickedBrands,
                        currentPickedLaptopScreenSizes: [],
                        currentPickedRam: [],
                        currentPickedProcessorType: [],
                        currentPickedTVScreenSize: [],
                        currentPickedTVScreenSolution: [],
                        currentPickedPhoneColour: [],
                        page: pageSize, 
                        pages: Math.ceil(otherTotalProductsOfThatCategoryWithFilter/pageSize)
                    });
                } else {
                    res.status(404);
                    throw new Error("Can't find the list of product");
                };        


                break;
        }
    }
});

export {
    getListOfProducts
}