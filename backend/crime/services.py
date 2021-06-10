import pandas as pd
from common.services import Reader, Printer
from common.models import fileDTO


class CrimeServices(Reader, Printer):

    def read_file(self, payload):
        file = fileDTO()
        file.context = payload.get('context')
        file.fname = payload.get('fname')
        return file

    def csv(self, payload):
        printer = Printer()
        reader = Reader()
        printer.dframe(reader.csv(self.read_file(payload)))

    def xls(self, payload):
        printer = Printer()
        reader = Reader()
        printer.dframe(reader.xls(self.read_file(payload), header=1, usecols=None))

    def json(self, payload):
        printer = Printer()
        reader = Reader()
        file = fileDTO()
        file.context = payload.get('context')
        file.fname = payload.get('fname')
        printer.dframe(pd.DataFrame(reader.json(self.read_file(payload))))





