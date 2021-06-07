import pandas as pd
from IPython import display
from real_estate.dataset import Dataset

class Housing(object):
    dataset = Dataset()

    def new_model(self, payload) -> object:
        this = self.dataset
        this.context = './data/'
        this.fname = payload
        return pd.read_excel(this.context + this.fname + '.xlsx', sheet_name='평균전세')





