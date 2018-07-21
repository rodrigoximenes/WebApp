﻿using System.Collections.Generic;
using DutchTreat.Data.Entities;

namespace DutchTreat.Data.Repository
{
    public interface IDutchRepository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetProductsByCategory(string category);
        bool SaveAll();
    }
}