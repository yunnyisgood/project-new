import pandas as pd
from common.services import Reader, Printer
from common.models import fileDTO


class CrimeServices(Reader, Printer):

    printer = Printer()
    reader = Reader()

    def read_file(self, payload):
        file = fileDTO()
        file.context = payload.get('context')
        file.fname = payload.get('fname')
        return file

    def csv(self, payload):
        self.printer.dframe(self.reader.csv(self.read_file(payload)))

    def xls(self, payload):
        self.printer.dframe(self.reader.xls(self.read_file(payload), header=1, usecols=None))

    def json(self, payload):
        self.printer.dframe(pd.DataFrame(self.reader.json(self.read_file(payload))))





