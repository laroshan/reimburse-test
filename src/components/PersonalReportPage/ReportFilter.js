import React from "react";
import styled from "styled-components";
import { DetailConsumer } from "../../context";
export default function ProductFilter() {
  return (
    <DetailConsumer>
      {(value) => {
        const { search, company, price, handleChange } = value;
        return (
          <div className="row my-4">
            <div className="col-6 mx-auto">
              <FilterWrapper>
                {/* report search */}
                <div>
                  <label htmlFor="search">Search Report</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                </div>
                {/*end of text search */}
                {/* category search */}
                <div>
                  <label htmlFor="techlead">techlead</label>
                  <select
                    name="techlead"
                    id="techlead"
                    onChange={handleChange}
                    value={company}
                    className="filter-item"
                  >
                    <option value="all">all</option>
                    <option value="Kumara">Mr.kumara</option>
                    <option value="nuwan">Mr.Nuwan</option>
                  </select>
                </div>
                {/* end of category search */}
                {/* price range */}
                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      amount : <span>$ {price}</span>
                    </p>
                  </label>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    min="0"
                    max="10000"
                    className="filter-price"
                    value={price}
                    onChange={handleChange}
                  />
                </div>
                {/* end of  price range */}
                {/* free shippping */}
                {/* <div>
                  <label htmlFor="" className="mx-2">
                    free shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    onChange={handleChange}
                    value={shipping && true}
                  />
                </div> */}
                <div>
                  <label htmlFor="status">status</label>
                  <select
                    name="status"
                    id="status"
                    onChange={handleChange}
                    value={company}
                    className="filter-item"
                  >
                    <option value="all">all</option>
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
                {/* find by date */}
                <div>
                  <label htmlFor="date">Date From</label>
                  <input
                    type="date"
                    name="date"
                    id="datefrom"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                </div>

                <div>
                  <label htmlFor="date">Date to</label>
                  <input
                    type="date"
                    name="date"
                    id="dateto"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                </div>
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </DetailConsumer>
  );
}

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 1rem;
    border: 2px solid #9f9fa0;
  }
`;
