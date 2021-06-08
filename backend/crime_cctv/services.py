import pandas as pd

from models import CCTVDto

class CCTVServices(object):
    dto = CCTVDto()

    def new_model_from_csv(self, payload):
        this = self.dto
        this.context = './data/'
        this.fname = payload
        return pd.read_csv(this.context+this.fname)

    def new_model_from_excel(self, payload):
        this = self.dto
        this.context = './data/'
        this.fname = payload
        return pd.read_excel(this.context + this.fname+ '.xls')

