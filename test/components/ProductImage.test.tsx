import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('Pruebas en ProductImage', () => { 

    test('debe de mostrar el componente correctamente con el url de la imagen ', () => { 

        const wrapper = renderer.create(
            <ProductImage img="./coffee-mug.png" />
        );

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

    test('debe de mostrar el componente con la imagen del producto', () => { 

        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage/>
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();

    })

})